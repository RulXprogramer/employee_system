import { Field, InputType } from "@nestjs/graphql";
import { IHistoryInput } from "src/interfaces/history.interface";

@InputType()
export class HistoryInput implements IHistoryInput{
    
    @Field()
    employeeId: string;
    
    @Field()
    checkIn: string;
    
    @Field({nullable: true})
    checkOut: string;
}
