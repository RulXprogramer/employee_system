import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IEmployee, IEmployeeInput } from 'src/interfaces/employee.interface';
import { EmployeesService } from 'src/modules/db/services/employees/employees.service';
import { EmployeeInput } from '../../schemas/employee/employee-input.schema';
import { Employee } from '../../schemas/employee/employee.schema';

@Resolver(Employee)
export class EmployeesResolver {

    constructor(private employeesService:EmployeesService){}

    @Query(() => [Employee])
    employees(): Promise<IEmployee[]> {
        return this.employeesService.list();
    }

    @Query(() => Employee)
    employee(): IEmployee {
        const employee: IEmployee = {
            _id: '12345',
            name: 'Raúl',
            surname: 'Navarrete',
            birth: new Date('2000-12-03'),
            area: 'fabrica',
            status: 'empleado',
            active: true,
            salary: 1000.50,
            createdAt: new Date(),
        };

        return employee;
    }

    @Mutation(() => Employee)
    createEmployee(@Args({name: 'data', type: () => EmployeeInput}) data: IEmployeeInput): Promise<IEmployee>{
        return this.employeesService.create(data);
    }

}
