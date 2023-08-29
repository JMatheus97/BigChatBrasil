import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteRepository } from './repositories/cliente.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { ClienteEntity } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}
  create(createClienteDto: CreateClienteDto) {
    return this.clienteRepository.create(createClienteDto);
  }

  findAll() {
    return this.clienteRepository.findAll();
  }

  async findOne(id: number): Promise<ClienteEntity> {
    const cliente = await this.clienteRepository.findOne(id);
    if (!cliente) {
      throw new NotFoundError('O cliente não encontrado!');
    } else {
      return cliente;
    }
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  remove(id: number) {
    return this.clienteRepository.remove(id);
  }
}
