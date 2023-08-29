import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AlterarLimitBackOfficeDto {
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
    description: 'Limite máximo',
  })
  @IsNumber()
  @IsNotEmpty()
  limiteMax: number;
}
