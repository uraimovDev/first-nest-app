import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    UserModule, 
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
