import { Field, InputType } from "@nestjs/graphql";
import { IEmployeeInput } from "src/interfaces/employee.interface";

@InputType()
export class EmployeeInput implements IEmployeeInput {
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
    @Field({nullable: true})
    active: boolean;
    @Field()
    salary: number;

}