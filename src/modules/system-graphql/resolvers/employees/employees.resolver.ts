import { Query, Resolver } from '@nestjs/graphql';
import { IEmployee } from 'src/interfaces/employee.interface';
import { Employee } from '../../schemas/employee/employee.schema';

@Resolver(Employee)
export class EmployeesResolver {
    @Query(() => [Employee])
    employees(): IEmployee[] {
        const employee: IEmployee = {
            id: '12345',
            name: 'Jesús',
            surname: 'González',
            birth: new Date('2000-12-03'),
            area: 'fabrica',
            status: 'empleado',
            active: true,
            salary: 1000.50,
            createdAt: new Date(),
        };

        return [employee, employee];
    }

    @Query(() => Employee)
    employee(): IEmployee {
        const employee: IEmployee = {
            id: '12345',
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
}
