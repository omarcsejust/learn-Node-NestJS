import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resolve } from 'path';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './task.dto';
import { TaskEntity } from './task.entity';
import { TASKS } from './tasks.mock';

@Injectable()
export class TaskService {
    private tasks = TASKS;

    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>
    ){}

    async addTask(task: CreateTaskDto){
        return await this.taskRepository.save(task)
    }

    public getAllTasks(): Promise<TaskEntity[]>{
        return this.taskRepository.find();
    }

    public getTaskById(id: number): Promise<TaskEntity>{
        const taskId = Number(id);  // Need to convert id to Number
        return this.taskRepository.findOneBy({id: id})
    }

    public deleteTask(id: number){
        const index = this.tasks.findIndex(task => task.id === id)
        if(index === -1){
            throw new HttpException('Not found!', 404);
        }

        return this.tasks.splice(index, 1)
    }


}
