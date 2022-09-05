import { IsInt, IsNotEmpty, IsNumber, IsString, Length, Min, Max } from "class-validator";

export class TaskDto{
    @IsNotEmpty({'message': 'ID can not be empty!'})
    @IsNumber()
    @IsInt()
    id: number;
}


export class CreateTaskDto{
    @IsNotEmpty()
    @IsString()
    @Length(5, 255)
    title: string;

    @IsNotEmpty()
    @IsString()
    @Length(10)
    desc: string; 

    status: number;
}


export class UpdateTaskDto extends CreateTaskDto{
}


