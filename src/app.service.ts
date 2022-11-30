import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex(): string {
    return `Hello World`;
  }

  getHistory(){
    return 'This is the employee history';
  }
}
