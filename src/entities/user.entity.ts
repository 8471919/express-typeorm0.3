import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email_UNIQUE", ["email"], { unique: true })
@Entity("user", { schema: "mydb" })
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("varchar", { name: "email", unique: true, length: 45 })
	email!: string;

	@Column("varchar", { name: "password", length: 255 })
	password!: string;
}
