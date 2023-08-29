import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TipoPlano } from '../enum/enum.cliente';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Email do cliente',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Nome do cliente',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Telefone do cliente',
  })
  @IsString()
  telefone: string;

  @ApiProperty({
    description: 'CPF do cliente',
  })
  @IsString()
  cpf: string;

  @ApiProperty({
    description: 'CNPJ do cliente',
  })
  @IsString()
  cnpj: string;

  @ApiProperty({
    description: 'Nome da empresa do cliente',
  })
  @IsString()
  @IsNotEmpty()
  nomeEmpresa: string;

  @ApiProperty({
    description: 'O tipo de cliente',
  })
  @IsNotEmpty()
  tipoPlano: TipoPlano;

  @ApiProperty({
    description: 'Saldo de Crédito do cliente',
  })
  @IsNumber()
  @IsNotEmpty()
  saldoCred: number;

  @ApiProperty({
    description: 'Limite máximo  do cliente',
  })
  @IsNumber()
  @IsNotEmpty()
  limiteMax: number;
}
