import { Controller, Post, Body } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';

@Controller('mensagem')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}

  @Post()
  envia(@Body() createMensagemDto: CreateMensagemDto) {
    return this.mensagemService.envia(createMensagemDto);
  }
}
