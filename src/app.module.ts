import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MensagemModule } from './mensagem/mensagem.module';
import { BackOfficeModule } from './back-office/back-office.module';

@Module({
  imports: [ClienteModule, MensagemModule, BackOfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
