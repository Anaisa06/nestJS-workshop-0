import { Module } from '@nestjs/common';
import { LoansModule } from './loans/loans.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [LoansModule, UsersModule]
})
export class AppModule {}