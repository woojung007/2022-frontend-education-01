// 데이터베이스와 백엔드 연결해주기

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 export class ProductReturn extends BaseEntity{
	@PrimaryGeneratedColumn("increment")
	//키 값을 자동으로 만들어 줌
	_id!: string;


	@Column({type: "text"})
	seller!: string;

	@Column({type: "text"})
	name!: string;

	@Column({type: "text"})
	detail!: string;

	@Column({type: "text"})
	price!: number;
	
	@Column({type: "number"})
	createdAt!: number;

}


@Entity()
 export class CreateProduct extends BaseEntity{
	@PrimaryGeneratedColumn("increment")
	//키 값을 자동으로 만들어 줌
	seller!: string;

	@Column({type: "text"})
	name!: string;

	@Column({type: "text"})
	detail!: string;

	@Column({type: "number"})
	price!: number;
	
}