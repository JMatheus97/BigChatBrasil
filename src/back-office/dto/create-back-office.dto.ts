import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBackOfficeDto {
  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  @IsString()
  @IsNotEmpty()
  tipoOperacao: string;
}
