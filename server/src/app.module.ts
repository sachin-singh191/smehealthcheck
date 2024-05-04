import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './sequelize/sequelize.module';
import { CompanyModule } from './company/company.module';
import { AppConfigModule } from './config.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
