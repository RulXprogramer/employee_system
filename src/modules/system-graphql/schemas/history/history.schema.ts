import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IEmployee } from "src/interfaces/employee.interface";
import { IHistory } from "src/interfaces/history.interface";

@ObjectType()
export class History implements IHistory{
    
    @Field(() => ID)
    _id: string;
    
    @Field()
    employeeId: string;
    
    @Field(() => History, {nullable: true})
    employee: IEmployee;
    
    @Field({nullable: true})
    date: Date;
    
    @Field()
    checkIn: string;
    
    @Field()
    checkOut: string;
}
