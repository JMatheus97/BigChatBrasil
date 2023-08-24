import { Mensagem } from '@prisma/client';

export class MensagemEntity implements Mensagem {
  id: number;
  numeroTelefone: string;
  flagWhatsApp: boolean;
  textoMensagem: string;
  idCliente: number;
}
