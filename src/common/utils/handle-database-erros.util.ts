import { DataBaseError } from '../errors/types/DataBaseError';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';
import { PrismaClientError } from '../errors/types/prismaClienteError';

enum PrismaErros {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErros.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DataBaseError(e.message);
  }
};
