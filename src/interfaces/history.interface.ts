import {IEmployee} from './employee.interface';

export interface IHistory {
    _id: string;
	employeeId: string;
    employee: IEmployee;
	date: Date;
	checkIn: string;
	checkOut: string;
}

export interface IHistoryInput {
	employeeId: string;
	checkIn: string;
	checkOut: string;
}