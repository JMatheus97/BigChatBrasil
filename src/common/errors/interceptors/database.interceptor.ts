import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { handleDatabaseErrors } from 'src/common/utils/handle-database-erros.util';
import { isPrimaError } from 'src/common/utils/is-prisma-error.util';
import { DataBaseError } from '../types/DataBaseError';

@Injectable()
export class DataBaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (isPrimaError(error)) {
          error = handleDatabaseErrors(error);
        }

        if (error instanceof DataBaseError) {
          throw new BadRequestException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
