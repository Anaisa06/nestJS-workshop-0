import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { HttpErrorFilter } from 'src/common/filters/http-exception.filter';

@Injectable()
export class LoansService {
  calculateLoanRisk(userId: any): string {
    if (userId.creditScore > 700) {
      return 'Low Risk';
    } else {
      return 'High Risk';
    }
  }

  createLoan(createLoanDto: CreateLoanDto): string {
    const risk: string = this.calculateLoanRisk(createLoanDto.userId);
    if(risk === 'High Risk') throw new HttpErrorFilter();
    console.log('Creating loan...');
    return 'Loan created';
  }

  getLoanStatus(id: number): string {
    return `This returns the status of loan with id ${id}`;
  }
}