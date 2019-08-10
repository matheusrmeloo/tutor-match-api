import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../models/student";

@Entity()
export class Teacher extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100, nullable: false })
    public name: string;

    @Column({ length: 100, nullable: false })
    public city: string;

    @Column({ length: 100, nullable: false })
    public photo: string;

    @OneToMany(() => Student, (student) => student.teacher)
    public students: Student[];
}
