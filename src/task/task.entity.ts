import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tasks')
export class TaskEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 500,
        nullable: false
    })
    title: string;

    @Column('text')
    desc: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({
        type: 'boolean',
        default: true,
    })
    is_active: boolean;
}


@Entity('task_statuses')
export class TaskStatusEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
        nullable: false
    })
    status: string;
}

