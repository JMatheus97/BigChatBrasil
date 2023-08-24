import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMensagemDto {
  @IsString()
  @IsNotEmpty()
  numeroTelefone: string;

  @IsBoolean()
  @IsNotEmpty()
  flagWhatsApp: boolean;

  @IsString()
  @IsNotEmpty()
  textoMensagem: string;

  @IsNumber()
  @IsNotEmpty()
  idCliente: number;
}
