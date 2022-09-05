import { Body, Controller, Get, Param, Post, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
    constructor (private taskService: TaskService){}

    @Post()
    @UsePipes(ValidationPipe)
    async addTask(@Body() task: CreateTaskDto){
        return await this.taskService.addTask(task)
    }

    @Get()
    public getTasks(){
        return this.taskService.getAllTasks()
    }

    @Get(':id')
    public async getTaskById(@Param('id') id: number){
        return await this.taskService.getTaskById(id);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async updateTask(@Param('id') id: number, @Body() task: UpdateTaskDto){
        return this.taskService.updateTask(id, task);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number){
        return this.taskService.deleteTask(id);
    }

}
