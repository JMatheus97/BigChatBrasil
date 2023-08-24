import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AlterarLimitBackOfficeDto {
  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  @IsString()
  @IsNotEmpty()
  tipoOperacao: string;

  @IsNumber()
  @IsNotEmpty()
  limiteMax: number;
}
