import { Module } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { MensagemController } from './mensagem.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MensagemRepository } from './repositories/mensagem.repository';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [ClienteModule],
  controllers: [MensagemController],
  providers: [MensagemService, PrismaService, MensagemRepository],
})
export class MensagemModule {}
