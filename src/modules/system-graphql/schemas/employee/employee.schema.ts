import { Field, ID,ObjectType } from "@nestjs/graphql";
import { IEmployee } from "src/interfaces/employee.interface";
import { IHistory } from "src/interfaces/history.interface";
import { History } from "../history/history.schema";

@ObjectType()
export class Employee implements IEmployee{
    @Field(() => ID)
    _id: string;
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

    @Field(() => [History], {nullable: true})
    histories: IHistory[];

}