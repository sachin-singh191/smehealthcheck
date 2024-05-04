import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule global across the application
      envFilePath: '.env', // Specify the location of your environment file
      expandVariables: true, // Allows usage of ${} syntax in env variables
    }),
  ],
})
export class AppConfigModule {}
