// 데이터베이스와 백엔드 연결해주기

console.log("타입스크립트를 실행했어요!!")

import {DataSource} from "typeorm";
import {ProductReturn} from "./Board.postgres";

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
}).catch(() => {
    console.log("연결실패!!!");
});