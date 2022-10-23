import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IEmployee } from 'src/interfaces/employee.interface';

export type EmployeeDocument = EmployeeModel & Document;

@Schema()
export class EmployeeModel implements IEmployee {
    _id: string;
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    surname: string;
    @Prop({required: true})
    birth: Date;
    @Prop({required: true})
    area: string;
    @Prop({required: true})
    status: string;
    @Prop({default: true})
    active: boolean;
    @Prop({required: true})
    salary: number;
    @Prop({default: () => new Date()})
    createdAt: Date;

}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeModel);