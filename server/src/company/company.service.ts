import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { Company } from './company.model';
import { CompanyDto } from './company.dto'; 

@Injectable()
export class CompanyService {
  private readonly baseUrl: string;

  constructor(
    @InjectModel(Company) private companyModel: typeof Company,
    private configService: ConfigService
  ) {
    this.baseUrl = this.configService.get<string>('BASE_URL');
  }

  async createCompany(data: Partial<Company> & { documentURLs: string[] }): Promise<Company> {
    return this.companyModel.create(data);
  }

  async findAllCompanies(): Promise<CompanyDto[]> {
    const companies = await this.companyModel.findAll({
      order: [['createdAt', 'DESC']]
    });

    return companies.map(company => {
      const jsonCompany = company.toJSON() as CompanyDto;
      return {
        ...jsonCompany,
        documentURLs: company.documentURLs.map(url => `${this.baseUrl}/uploads/${url.replace('upload/', '')}`)
      };
    });
  }
}
