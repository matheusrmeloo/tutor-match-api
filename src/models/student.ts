import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "../models/teacher";

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100, nullable: false })
    public name: string;

    @Column({ length: 100, nullable: false })
    public photo: string;

    @ManyToOne(() => Teacher, (teacher) => teacher.students)
    public teacher: Teacher;

}
