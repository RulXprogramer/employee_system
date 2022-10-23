import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
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
    employee(@Args({name: 'id', type: () => ID}) id: string): Promise<IEmployee> {
        return this.employeesService.get(id);
    }

    @Mutation(() => Employee)
    createEmployee(@Args({name: 'data', type: () => EmployeeInput}) data: IEmployeeInput): Promise<IEmployee>{
        return this.employeesService.create(data);
    }

    @Mutation(() => Employee)
    updateEmployee(
        @Args({name: 'id', type: () => ID}) id: string,
        @Args({name: 'data', type: () => EmployeeInput}) data: IEmployeeInput
        ): Promise<IEmployee> {
        return this.employeesService.update(id, data);
    }

    @Mutation(() => Employee)
    deleteEmployee(@Args({name: 'id', type: () => ID}) id: string): Promise<IEmployee>{
        return this.employeesService.delete(id);
    }

}
