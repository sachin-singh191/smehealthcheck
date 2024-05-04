import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.model';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([Company]) // Ensure Company model is imported here
  ],
  providers: [CompanyService], // Ensure CompanyService is listed as a provider
  controllers: [CompanyController],
  exports: [CompanyService] // Optionally export CompanyService if it's used elsewhere
})
export class CompanyModule {}
