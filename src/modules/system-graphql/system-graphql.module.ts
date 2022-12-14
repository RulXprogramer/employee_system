import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DbModule } from '../db/db.module';
import { EmployeesResolver } from './resolvers/employees/employees.resolver';
import { HistoriesResolver } from './resolvers/histories/histories.resolver';

@Module({
    imports: [
        DbModule, 
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver, 
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),})],
    providers: [EmployeesResolver, HistoriesResolver],
})
export class SystemGraphqlModule {}
