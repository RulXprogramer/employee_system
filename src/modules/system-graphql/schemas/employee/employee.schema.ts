import { Field, ID,ObjectType } from "@nestjs/graphql";
import { IEmployee } from "src/interfaces/employee.interface";

@ObjectType()
export class Employee implements IEmployee{
    @Field(() => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    surname: string;
    @Field()
    birth: Date;
    @Field()
    area: string;
    @Field()
    status: string;
    @Field()
    active: boolean;
    @Field()
    salary: number;
    @Field()
    createdAt: Date;

}