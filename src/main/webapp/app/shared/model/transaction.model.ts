import { ITask } from 'app/shared/model/task.model';

export interface ITransaction {
  id?: number;
  amount?: number;
  title?: string;
  relatedTask?: ITask;
}

export class Transaction implements ITransaction {
  constructor(public id?: number, public amount?: number, public title?: string, public relatedTask?: ITask) {}
}
