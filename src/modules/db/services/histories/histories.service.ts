import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IHistory, IHistoryInput } from 'src/interfaces/history.interface';
import { HistoryDocument } from '../../models/history.model';

@Injectable()
export class HistoriesService {
    constructor(@InjectModel('histories') private historyModel: Model<HistoryDocument>){}

    async list(filter = {}){
        const records = await this.historyModel.find(filter).exec();
        return records as IHistory[];
    }

    async get(id: string){
        const record = await this.historyModel.findById(id).exec();
        return record as IHistory;
    }

    async create(data: IHistoryInput){
        const record = await this.historyModel.create(data);
        return record as IHistory;
    }

    async update(id: string, data: IHistoryInput){
        const record = await this.historyModel.findByIdAndUpdate(
            id, 
            {
                $set:{
                    ...data,
                },
            },
            {new: true}
        );

        return record as IHistory;
    }

    async delete(id: string){
        const record = await this.historyModel.findByIdAndDelete(id);
        return record as IHistory;
    }
}
