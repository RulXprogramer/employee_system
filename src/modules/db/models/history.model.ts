import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IEmployee } from "src/interfaces/employee.interface";
import { IHistory } from "src/interfaces/history.interface";

export type HistoryDocument = HistoryModel & Document;

@Schema()
export class HistoryModel implements IHistory{
    _id: string;
    
    @Prop({required: true})
    employeeId: string;

    employee: IEmployee;
    
    @Prop({default: () => new Date()})
    date: Date;
    
    @Prop({default: ' '})
    checkIn: string;
    
    @Prop({default: ' '})
    checkOut: string;
}

export const HistorySchema = SchemaFactory.createForClass(HistoryModel);