import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EmployeesResolver } from './resolvers/employees/employees.resolver';

@Module({
    imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver, 
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),})],
    providers: [EmployeesResolver]
})
export class SystemGraphqlModule {}