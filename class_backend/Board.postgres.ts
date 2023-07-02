// 데이터베이스와 백엔드 연결해주기
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  // 키 값을 자동으로 만들어 줌
  @PrimaryGeneratedColumn("increment") // uuid
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  //deletedAt : Date //soft-delete
}
