import { Controller, Post, Body } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('mensagem')
@Controller('mensagem')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Post()
  envia(@Body() createMensagemDto: CreateMensagemDto) {
    return this.mensagemService.envia(createMensagemDto);
  }
}
