import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEmployee } from 'src/interfaces/employee.interface';
import { EmployeeDocument } from '../../models/employee.model';

@Injectable()
export class EmployeesService {
    constructor(@InjectModel('employees') private employeeModel: Model<EmployeeDocument>){
        this.create();
    }

    async list(){
        const records = await this.employeeModel.find().exec();

        return records as IEmployee[];
    }

    async create(){
        const data = {
            name: 'Raúl',
            surname: 'Navarrete',
            birth: new Date('2000-12-03'),
            area: 'fabrica',
            status: 'empleado',
            active: true,
            salary: 2000,
            createdAt: new Date(),
        };

        //const record = await this.employeeModel.create(data);
    }
}
