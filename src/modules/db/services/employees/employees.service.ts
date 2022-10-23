import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEmployee, IEmployeeInput } from 'src/interfaces/employee.interface';
import { EmployeeDocument } from '../../models/employee.model';

@Injectable()
export class EmployeesService {
    constructor(@InjectModel('employees') private employeeModel: Model<EmployeeDocument>){}

    async list(){
        const records = await this.employeeModel.find().exec();

        return records as IEmployee[];
    }

    async create(data: IEmployeeInput){
        const record = await this.employeeModel.create(data);
        return record as IEmployee;
    }
}
