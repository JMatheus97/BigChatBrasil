import { Injectable } from '@nestjs/common';
import { BackOfficeRepository } from './respositories/back-office.repositories';
import { IncluirCredBackOfficeDto } from './dto/incluirCred-back-office.dto';
import { ClienteRepository } from 'src/cliente/repositories/cliente.repository';
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { AlterarLimitBackOfficeDto } from './dto/alterarLimit-back-office.dto';
import { AlterarPlanoBackOfficeDto } from './dto/alterarPlano-back-office.dto';

@Injectable()
export class BackOfficeService {
  constructor(
    private readonly backOfficeRepository: BackOfficeRepository,
    private readonly clienteRepository: ClienteRepository,
  ) {}

  async incluirCredito(
    incluirCred: IncluirCredBackOfficeDto,
  ): Promise<ClienteEntity> {
    const backofficeSave = await this.backOfficeRepository.create(incluirCred);
    if (backofficeSave) {
      const cliente = await this.clienteRepository.updateInclusao(
        backofficeSave.idCliente,
        incluirCred.saldoCred,
      );
      return cliente;
    }
  }

  async alterarLimite(
    alterarLimite: AlterarLimitBackOfficeDto,
  ): Promise<ClienteEntity> {
    const backofficeSave =
      await this.backOfficeRepository.create(alterarLimite);
    if (backofficeSave) {
      const cliente = await this.clienteRepository.updateLimite(
        backofficeSave.idCliente,
        alterarLimite.limiteMax,
      );
      return cliente;
    }
  }

  async alterarPlano(
    alterarPlano: AlterarPlanoBackOfficeDto,
  ): Promise<ClienteEntity> {
    const backofficeSave = await this.backOfficeRepository.create(alterarPlano);
    if (backofficeSave) {
      const cliente = await this.clienteRepository.updatePlano(
        backofficeSave.idCliente,
        alterarPlano.tipoPlano,
      );
      return cliente;
    }
  }

  async consultarSaldo(id: number) {
    return this.clienteRepository.findSaldo(id);
  }
}
