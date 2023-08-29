import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class IncluirCredBackOfficeDto {
  @ApiProperty({
    description: 'Id do cliente',
  })
  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  @ApiProperty({
    description: 'Tipo de Operação',
  })
  @IsString()
  @IsNotEmpty()
  tipoOperacao: string;

  @ApiProperty({
    description: 'Saldo de Crédito do cliente',
  })
  @IsNumber()
  @IsNotEmpty()
  saldoCred: number;
}
