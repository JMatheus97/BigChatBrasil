import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AlterarPlanoBackOfficeDto {
  @IsNumber()
  @IsNotEmpty()
  idCliente: number;

  @IsString()
  @IsNotEmpty()
  tipoOperacao: string;

  @IsString()
  @IsNotEmpty()
  tipoPlano: string;
}
