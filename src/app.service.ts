import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEntry(): string {
    return 'THATS LINKEDIN CLONE API';
  };
};
