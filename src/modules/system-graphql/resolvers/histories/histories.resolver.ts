import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IHistory, IHistoryInput } from 'src/interfaces/history.interface';
import { HistoriesService } from '../../../db/services/histories/histories.service';
import { HistoryInput } from '../../schemas/history/history-input.schema';
import { History } from '../../schemas/history/history.schema';

@Resolver(History)
export class HistoriesResolver {
    
    constructor(private historiesService: HistoriesService){}

    @Query(() => [History])
    history(): Promise<IHistory[]> {
        return this.historiesService.list();
    }

    @Mutation(() => History)
    createHistory(@Args({name: 'data', type: () => HistoryInput}) data: IHistoryInput): Promise<IHistory>{
        return this.historiesService.create(data);
    }


}
