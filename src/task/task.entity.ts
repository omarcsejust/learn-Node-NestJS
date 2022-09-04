import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TaskEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    desc: string

    @Column({
        type: 'boolean',
        default: true,
    })
    isActive: boolean
}