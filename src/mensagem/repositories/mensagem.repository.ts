import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMensagemDto } from '../dto/create-mensagem.dto';
import { MensagemEntity } from '../entities/mensagem.entity';

@Injectable()
export class MensagemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMensagemDto: CreateMensagemDto): Promise<MensagemEntity> {
    return this.prisma.mensagem.create({
      data: createMensagemDto,
    });
  }
}
