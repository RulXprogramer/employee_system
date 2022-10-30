import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IEmployee } from "src/interfaces/employee.interface";
import { IHistory } from "src/interfaces/history.interface";
import { Employee } from "../employee/employee.schema";

@ObjectType()
export class History implements IHistory{
    
    @Field(() => ID)
    _id: string;
    
    @Field()
    employeeId: string;
    
    @Field(() => Employee, {nullable: true})
    employee: IEmployee;
    
    @Field({nullable: true})
    date: Date;
    
    @Field()
    checkIn: string;
    
    @Field()
    checkOut: string;
}
