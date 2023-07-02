// 데이터베이스와 백엔드 연결해주기

import { BaseEntity, Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 export class ProductReturn extends BaseEntity{
	
	@PrimaryGeneratedColumn("uuid") 
	_id!: string;

	// @PrimaryGeneratedColumn("increment")
	// productId!: string;

	@Column({type: "text"})
	seller!: string;

	@Column({type: "text"})
	name!: string;

	@Column({type: "text"})
	detail!: string;

	@Column({type: "int"})
	price!: number;
	
	@Column({type : "timestamp", default : new Date(),nullable : true})
	createdAt!: Date


	@DeleteDateColumn()
	deletedAt!: Date


}




