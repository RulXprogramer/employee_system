import { IHistory } from "./history.interface";

export interface IEmployee {
    _id: string;
	name: string;
	surname: string;
	birth: Date;
	area: string;
	status: string;
    active: boolean;
	salary: number;
	createdAt: Date;
	histories: IHistory[];
}

export interface IEmployeeInput {
	name: string;
	surname: string;
	birth: Date;
	area: string;
	status: string;
	active: boolean;
	salary: number;
}