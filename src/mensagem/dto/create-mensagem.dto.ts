import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMensagemDto {
  @ApiProperty({
    description: 'Numero do cliente',
  })
  @IsString()
  @IsNotEmpty()
  numeroTelefone: string;

  @ApiProperty({
    description: 'Vai ser enviado pelo Whatsapp',
  })
  @IsBoolean()
  @IsNotEmpty()
  flagWhatsApp: boolean;

  @ApiProperty({
    description: 'Mensagem de texto',
  })
  @IsString()
  @IsNotEmpty()
  textoMensagem: string;

  @ApiProperty({
    description: 'Id do cliente',
  })
  @IsNumber()
  @IsNotEmpty()
  idCliente: number;
}
