// 데이터베이스와 백엔드 연결해주기
console.log("타입스크립트를 실행했어요!!");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5008,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

// 1. 타입
const typeDefs = gql`
  # 프론트앤드에서 전달받는 데이터 - input 사용
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    #   createBoard(writer: String, title: String, contentsL String):String (연습용 - example)
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    //데이터베이스에 접속해서 게시물 가져오기
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    //데이터베이스에 접속해서 게시물 등록하기
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,
        //writer: args.createBoardInput.writer,
        //title: args.createBoardInput.title,
        //contents: args.createBoardInput.contents
      });

      // //수정하면?
      // Board.update({writer: "철수"},{title: "title2"});

      // //삭제하면?
      // Board.delete({writer:"철수"});
      // Board.update({writer: "철수"}, {deletedAt: new Date() });

      return "게시물을 등록했습니다";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!!!");
    //백엔드 API를 오픈-리슨(24시간동안 접속가능하게끔 대기상태로 열어주기)

    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!!!");
  });
