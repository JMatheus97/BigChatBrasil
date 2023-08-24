import { Cliente } from '@prisma/client';

export class ClienteEntity implements Cliente {
  tipoPlano: string;
  saldoCred: number;
  limiteMax: number;
  id: number;
  email: string;
  nome: string;
  telefone: string;
  cpf: string;
  cnpj: string;
  nomeEmpresa: string;
}
