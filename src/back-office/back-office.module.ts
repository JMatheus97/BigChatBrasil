import { Module } from '@nestjs/common';
import { BackOfficeService } from './back-office.service';
import { BackOfficeController } from './back-office.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BackOfficeRepository } from './respositories/back-office.repositories';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [ClienteModule],
  controllers: [BackOfficeController],
  providers: [BackOfficeService, PrismaService, BackOfficeRepository],
})
export class BackOfficeModule {}
