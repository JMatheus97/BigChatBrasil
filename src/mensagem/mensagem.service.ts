import { Injectable } from '@nestjs/common';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { TipoPlano } from 'src/cliente/enum/enum.cliente';
import { MensagemRepository } from './repositories/mensagem.repository';
import { ClienteService } from 'src/cliente/cliente.service';
import { ClienteRepository } from '../cliente/repositories/cliente.repository';

@Injectable()
export class MensagemService {
  constructor(
    private clienteService: ClienteService,
    private clienteRepository: ClienteRepository,
    private mensagemRepository: MensagemRepository,
  ) {}
  async envia(createMensagemDto: CreateMensagemDto) {
    const cliente = await this.clienteService.findOne(
      createMensagemDto.idCliente,
    );

    if (cliente) {
      if (
        cliente.tipoPlano === TipoPlano.PRÉ_PAGO &&
        cliente.saldoCred < 0.25
      ) {
        //Validações Futuras
        // const salAtual = cliente.saldoCred - 0.25;
        // const clienteSave = await this.clienteRepository.updateInclusao(
        //   cliente.id,
        //   salAtual,
        // );
        throw new Error(`O seu saldo é insuficiente ${cliente.saldoCred}`);
      }

      if (
        cliente.tipoPlano === TipoPlano.PÓS_PAGO &&
        cliente.saldoCred > cliente.limiteMax
      ) {
        //Validações Futuras
        // const salAtual = cliente.saldoCred + 0.25;
        // const clienteSave = await this.clienteRepository.updateInclusao(
        //   cliente.id,
        //   salAtual,
        // );

        throw new Error(`O você já atingiu seu limite ${cliente.saldoCred}`);
      }
    }
    return this.mensagemRepository.create(createMensagemDto);
  }
}
