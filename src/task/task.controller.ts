import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
    constructor (private taskService: TaskService){}

    @Get()
    public getTasks(){
        return this.taskService.getAllTasks()
    }

    @Post()
    @UsePipes(ValidationPipe)
    public addTask(@Body() task: CreateTaskDto){
        return this.taskService.addTask(task)
    }

    @Get('/:id')
    public async getTaskById(@Param('id') id: number){
        return this.taskService.getTaskById(id);
    }

}
