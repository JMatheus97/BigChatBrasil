import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TipoPlano } from '../enum/enum.cliente';

export class CreateClienteDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  telefone: string;

  @IsString()
  cpf: string;

  @IsString()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  nomeEmpresa: string;

  @IsNotEmpty()
  tipoPlano: TipoPlano;

  @IsNumber()
  @IsNotEmpty()
  saldoCred: number;

  @IsNumber()
  @IsNotEmpty()
  limiteMax: number;
}
