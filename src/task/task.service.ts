import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { TASKS } from './tasks.mock';

@Injectable()
export class TaskService {
    private tasks = TASKS;

    public getAllTasks(){
        return this.tasks;
    }

    public addTask(task){
        return this.tasks.push(task);
    }

    public getTaskById(id: number): Promise<any>{
        const taskId = Number(id);  // Need to convert id to Number
        return new Promise((resolve) => {
            const task = this.tasks.find((task) => task.id === taskId);
            if(!task){
                throw new HttpException('Not found!', 404);
            }

            return resolve(task);
        });
    }

    public deleteTask(id: number){
        const index = this.tasks.findIndex(task => task.id === id)
        if(index === -1){
            throw new HttpException('Not found!', 404);
        }

        return this.tasks.splice(index, 1)
    }


}
