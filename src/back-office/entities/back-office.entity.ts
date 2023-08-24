import { BackofficeFinanceiro } from '@prisma/client';

export class BackOfficeEntity implements BackofficeFinanceiro {
  tipoOperacao: string;
  idBackoffice: number;
  idCliente: number;
}
