import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BackOfficeService } from './back-office.service';
import { IncluirCredBackOfficeDto } from './dto/incluirCred-back-office.dto';
import { AlterarLimitBackOfficeDto } from './dto/alterarLimit-back-office.dto';
import { AlterarPlanoBackOfficeDto } from './dto/alterarPlano-back-office.dto';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('back-office')
@Controller('back-office')
export class BackOfficeController {
  constructor(private readonly backOfficeService: BackOfficeService) {}

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Post('/incluir')
  incluirCredito(@Body() incluirCredBackOfficeDto: IncluirCredBackOfficeDto) {
    return this.backOfficeService.incluirCredito(incluirCredBackOfficeDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Post('/limite')
  alterarLimite(@Body() alterarLimitBackOfficeDto: AlterarLimitBackOfficeDto) {
    return this.backOfficeService.alterarLimite(alterarLimitBackOfficeDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Post('/plano')
  alterarPlano(@Body() alterarPlanoOfficeDto: AlterarPlanoBackOfficeDto) {
    return this.backOfficeService.alterarPlano(alterarPlanoOfficeDto);
  }

  @ApiForbiddenResponse({ description: 'Acesso negado' })
  @Get(':id')
  consultarSaldo(@Param('id') id: string) {
    return this.backOfficeService.consultarSaldo(+id);
  }
}
