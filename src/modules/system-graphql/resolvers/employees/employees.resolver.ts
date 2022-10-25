import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { IEmployee, IEmployeeInput } from 'src/interfaces/employee.interface';
import { EmployeesService } from 'src/modules/db/services/employees/employees.service';
import { HistoriesService } from 'src/modules/db/services/histories/histories.service';
import { EmployeeInput } from '../../schemas/employee/employee-input.schema';
import { Employee } from '../../schemas/employee/employee.schema';

@Resolver(Employee)
export class EmployeesResolver {

    constructor(private employeesService:EmployeesService, private historiesService: HistoriesService){}

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

    @ResolveField()
    histories(@Parent() root: IEmployee){
        return this.historiesService.list({employeeId: root._id});
    }

}
