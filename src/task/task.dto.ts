import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class CreateTaskDto{
    @IsNotEmpty({'message': 'ID can not be empty!'})
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @Length(5, 255)
    title: string;

    @IsNotEmpty()
    @Length(10)
    desc: string;

    status: string;
}


export class UpdateTaskDto{
    id: number;
    title: string;
    desc: string;
    status: string;
}


