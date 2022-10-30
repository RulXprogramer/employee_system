import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { IHistory, IHistoryInput } from 'src/interfaces/history.interface';
import { EmployeesService } from 'src/modules/db/services/employees/employees.service';
import { HistoriesService } from '../../../db/services/histories/histories.service';
import { HistoryInput } from '../../schemas/history/history-input.schema';
import { History } from '../../schemas/history/history.schema';

@Resolver(History)
export class HistoriesResolver {
    
    constructor(private historiesService: HistoriesService, private employeesService: EmployeesService){}

    @Query(() => [History])
    histories(): Promise<IHistory[]> {
        return this.historiesService.list();
    }

    @Mutation(() => History)
    createHistory(@Args({name: 'data', type: () => HistoryInput}) data: IHistoryInput): Promise<IHistory>{
        return this.historiesService.create(data);
    }

    @Mutation(() => History)
    updateHistory(
        @Args({name: 'id', type: () => ID}) id: string,
        @Args({name: 'data', type: () => HistoryInput}) data: IHistoryInput
    ): Promise<IHistory>{
        return this.historiesService.update(id, data);
    }

    @ResolveField()
    employee(@Parent() root: IHistory){
        return this.employeesService.get(root.employeeId);
    } 
}
