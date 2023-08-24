import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class IncluirCredBackOfficeDto {
  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  @IsString()
  @IsNotEmpty()
  tipoOperacao: string;

  @IsNumber()
  @IsNotEmpty()
  saldoCred: number;
}
