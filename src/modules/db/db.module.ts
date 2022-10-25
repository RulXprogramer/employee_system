import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './models/employee.model';
import { HistorySchema } from './models/history.model';
import { EmployeesService } from './services/employees/employees.service';
import { HistoriesService } from './services/histories/histories.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/employee_system'),
        MongooseModule.forFeature(
            [
                {name: 'employees', schema: EmployeeSchema}, 
                {name: 'histories', schema: HistorySchema}
            ]
        )
    ],
    providers: [EmployeesService, HistoriesService],
    exports: [EmployeesService, HistoriesService]
})
export class DbModule {}
