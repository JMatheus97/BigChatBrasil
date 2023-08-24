import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BackOfficeService } from './back-office.service';
import { IncluirCredBackOfficeDto } from './dto/incluirCred-back-office.dto';
import { AlterarLimitBackOfficeDto } from './dto/alterarLimit-back-office.dto';
import { AlterarPlanoBackOfficeDto } from './dto/alterarPlano-back-office.dto';

@Controller('back-office')
export class BackOfficeController {
  constructor(private readonly backOfficeService: BackOfficeService) {}

  @Post('/incluir')
  incluirCredito(@Body() incluirCredBackOfficeDto: IncluirCredBackOfficeDto) {
    return this.backOfficeService.incluirCredito(incluirCredBackOfficeDto);
  }

  @Post('/limite')
  alterarLimite(@Body() alterarLimitBackOfficeDto: AlterarLimitBackOfficeDto) {
    return this.backOfficeService.alterarLimite(alterarLimitBackOfficeDto);
  }

  @Post('/plano')
  alterarPlano(@Body() alterarPlanoOfficeDto: AlterarPlanoBackOfficeDto) {
    return this.backOfficeService.alterarPlano(alterarPlanoOfficeDto);
  }

  @Get(':id')
  consultarSaldo(@Param('id') id: string) {
    return this.backOfficeService.consultarSaldo(+id);
  }
}
