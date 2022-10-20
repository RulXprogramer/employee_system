export interface IEmployee {
    id: string;
	name: string;
	surname: string;
	birth: Date;
	area: string;
	status: string;
    active: boolean;
	salary: number;
	createdAt: Date;
	//history: [History]
}