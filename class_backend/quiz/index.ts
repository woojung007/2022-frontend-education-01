import {ApolloServer, gql} from 'apollo-server'
import {ProductReturn} from "./Board.postgres"
import { DataSource } from 'typeorm'



const typeDefs = gql`

    input UpdateProductInput{
        name: String
        detail: String
        price: Int
    }

    input CreateProductInput{
        seller:String
        name: String
        detail: String
        price: Int
    }

    type ProductReturn{
        _id: String
        seller: String
        name: String
        detail: String
        price: Int
        createdAt: String

    }

    type Return{
        _id:String
        seller: String
        name: String
        detail: String
        price: Int
        deletedAt: String

    }



    type Query{
        fetchProducts(page: Int): [ProductReturn]
        fetchProduct(productId: String): Return
    }



    type Mutation{
        createProduct(seller: String, createProductInput: CreateProductInput!):String
        updateProduct(_id: ID, updateProductInput: UpdateProductInput!):String
        deleteProduct( productId: String ):String
    }

`


const resolvers = {
    Query: {
        fetchProducts: async() => {

            const result = await ProductReturn.find()
            return result
        },

        fetchProduct: async() => {
            const result1 = await ProductReturn.find()
            return result1
        },
    },


    Mutation:{
        createProduct: async(_:any, args:any) => {

            await ProductReturn.insert({
                ...args,
                ...args.createProductInput,
            });

            return "상품을 등록했습니다";
        },


        updateProduct: async(_:any, args:any) => {
            await ProductReturn.update({_id: args._id},
                {
                    name: args.updateProductInput.name,
                    detail: args.updateProductInput.detail,

                    price: args.updateProductInput.price,
                })

            return "상품을 수정했습니다";
        },



        deleteProduct: async(_:any, args:any) => {
            await ProductReturn.update({ _id : args.productId },{deletedAt : new Date()})
            return "상품을 식제했습니다";
        }
    }
};   






const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
});
  


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