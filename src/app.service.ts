import { Injectable } from '@nestjs/common';
import { tracer } from './zipkin-tracing';

@Injectable()
export class AppService {
  getHello(): string {
    return tracer.scoped(() => {
      return tracer.local('getHello', () => {
        // your logic here
        return 'Hello Worldss!';
      });
    });
  }
}
