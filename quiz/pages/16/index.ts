import {ApolloServer, gql} from 'apollo-server'
import {ProductReturn, CreateProduct} from "../../Board.postgres"
import { DataSource } from 'typeorm';





const AppDataSource = new DataSource({
    type:"postgres",
    host: "34.64.124.189",
    port: 5008,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [ProductReturn],
    synchronize: true,
    logging: true
});




const typeDefs = gql`

    input CreateProductInput{
        seller:String
        name: String
        detail: String
        price: Int
    }

    type ProductReturn{
        _id: ID
        seller: String
        name: String
        detail: String
        price: Int
        createdAt: Date
    }

    type CreateProduct{
        seller:String
        name: String
        detail: String
        price: Int
    }


    type Query{
        fetchProducts: [ProductReturn]
    }

    type Mutation{
        createProduct(seller: String, createProductInput: CreateProductInput!):String
    }

`


const resolvers = {
    Query: {
        fetchProducts: async() => {

            const result = await ProductReturn.find()
            return result
        }
    },


    Mutation:{
        createProduct: async(_:any, args:any) => {

                await CreateProduct.insert({
                    ...args,
                    ...args.createProductInput,
                })

                return "상품을 등록했습니다"
        }
    }


}       




const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
  });
  




AppDataSource.initialize()
    .then(()=>{
        console.log("연결성공!!!")
        //백엔드 API를 오픈-리슨(24시간동안 접속가능하게끔 대기상태로 열어주기)

        server.listen(4000).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });

}).catch(() => {
    console.log("연결실패!!!");
});