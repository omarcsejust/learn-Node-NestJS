import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resolve } from 'path';
import { Repository } from 'typeorm';
import { CreateTaskDto, TaskDto, UpdateTaskDto } from './task.dto';
import { TaskEntity } from './task.entity';
import { TASKS } from './tasks.mock';

@Injectable()
export class TaskService {
    private tasks = TASKS;

    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>
    ){}

    async addTask(createTaskDto: CreateTaskDto): Promise<TaskEntity>{
        const task = this.taskRepository.create(createTaskDto)
        return await this.taskRepository.save(task)
    }

    public getAllTasks(): Promise<TaskEntity[]>{
        return this.taskRepository.find();
    }

    async getTaskById(id: number): Promise<TaskEntity>{
        const taskId = Number(id);  // Need to convert id to Number
        const task = await this.taskRepository.findOneBy({id: id});
        if(task == null){
            throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
        }

        return task;
    }

    async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity>{
        const taskId = Number(id);
        await this.taskRepository.update(taskId, updateTaskDto);
        const task = await this.taskRepository.findOneBy({id: taskId});
        if(task == null){
            throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
        }

        return task;
    }

    async deleteTask(id: number){
        const taskTd = Number(id)
        const deletedTask = await this.taskRepository.delete({id: taskTd});
        if(!deletedTask.affected){
            throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
        }

        return {deleted: true};
    }


}
