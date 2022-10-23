import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './models/employee.model';
import { EmployeesService } from './services/employees/employees.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/employee_system'),
        MongooseModule.forFeature([{name: 'employees', schema: EmployeeSchema}])
    ],
    providers: [EmployeesService],
    exports: [EmployeesService],
})
export class DbModule {}
