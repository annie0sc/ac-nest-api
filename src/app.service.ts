import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! - Annie Chandolu';
  }
  getAbout(): string {
    return 'Hello this is an example of nest.js API.';
  }
}
