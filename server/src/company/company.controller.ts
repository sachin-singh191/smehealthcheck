import { Controller, Post, Get, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { CompanyDto } from './company.dto'; 

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 6, {
    storage: diskStorage({
      destination: './upload', 
      filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}${file.originalname}`);
      }
    })
  }))
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() companyData: any): Promise<Company> {
    const filePaths = files.map(file => file.path);
    return this.companyService.createCompany({ ...companyData, documentURLs: filePaths });
  }

  @Get()
  async findAll(): Promise<CompanyDto[]> {  
    return this.companyService.findAllCompanies();
  }
}
