import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class TaskDto{
    @IsNotEmpty({'message': 'ID can not be empty!'})
    @IsNumber()
    id: number;
}


export class CreateTaskDto{
    @IsNotEmpty()
    @Length(5, 255)
    title: string;

    @IsNotEmpty()
    @Length(10)
    desc: string; 

    status: number;
}


export class UpdateTaskDto{
    id: number;
    title: string;
    desc: string;
    status: string;
}


