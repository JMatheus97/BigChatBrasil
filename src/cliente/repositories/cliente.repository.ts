import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { ClienteEntity } from '../entities/cliente.entity';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Injectable()
export class ClienteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    return this.prisma.cliente.create({
      data: createClienteDto,
    });
  }

  async findAll(): Promise<ClienteEntity[]> {
    return this.prisma.cliente.findMany();
  }

  public async findOne(id: number): Promise<ClienteEntity> {
    return this.prisma.cliente.findUnique({
      where: {
        id,
      },
    });
  }

  async findSaldo(id: number): Promise<number> {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        id,
      },
      select: {
        saldoCred: true,
      },
    });

    if (cliente) {
      return cliente.saldoCred;
    } else {
      throw new Error('Cliente não  econtrado');
    }
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<ClienteEntity> {
    return this.prisma.cliente.update({
      where: {
        id,
      },
      data: updateClienteDto,
    });
  }

  async updateInclusao(id: number, saldoCred: number): Promise<ClienteEntity> {
    const getSaldo = await this.findSaldo(id);
    if (getSaldo) {
      saldoCred = saldoCred + getSaldo;
    }
    const cliente = this.prisma.cliente.update({
      where: {
        id,
      },
      data: {
        saldoCred: saldoCred,
      },
    });

    if (cliente) {
      return cliente;
    } else {
      throw new Error('Cliente não  econtrado');
    }
  }

  async updateLimite(id: number, limiteMax: number): Promise<ClienteEntity> {
    const cliente = this.prisma.cliente.update({
      where: {
        id,
      },
      data: {
        limiteMax: limiteMax,
      },
    });

    if (cliente) {
      return cliente;
    } else {
      throw new Error('Cliente não  econtrado');
    }
  }

  async updatePlano(id: number, tipoPlano: string): Promise<ClienteEntity> {
    const cliente = this.prisma.cliente.update({
      where: {
        id,
      },
      data: {
        tipoPlano: tipoPlano,
      },
    });

    if (cliente) {
      return cliente;
    } else {
      throw new Error('Cliente não  econtrado');
    }
  }

  async remove(id: number): Promise<ClienteEntity> {
    return this.prisma.cliente.delete({
      where: {
        id,
      },
    });
  }
}
