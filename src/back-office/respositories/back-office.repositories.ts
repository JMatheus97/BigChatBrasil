import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BackOfficeEntity } from '../entities/back-office.entity';
import { IncluirCredBackOfficeDto } from '../dto/incluirCred-back-office.dto';
import { AlterarLimitBackOfficeDto } from '../dto/alterarLimit-back-office.dto';
import { AlterarPlanoBackOfficeDto } from '../dto/alterarPlano-back-office.dto';

@Injectable()
export class BackOfficeRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(
    createBackOfficeDto:
      | IncluirCredBackOfficeDto
      | AlterarLimitBackOfficeDto
      | AlterarPlanoBackOfficeDto,
  ): Promise<BackOfficeEntity> {
    console.log(createBackOfficeDto);
    return this.prisma.backofficeFinanceiro.create({
      data: {
        idCliente: createBackOfficeDto.idCliente,
        tipoOperacao: createBackOfficeDto.tipoOperacao,
      },
    });
  }

  async findOne(idBackoffice: number): Promise<BackOfficeEntity> {
    return this.prisma.backofficeFinanceiro.findUnique({
      where: {
        idBackoffice,
      },
    });
  }
}
