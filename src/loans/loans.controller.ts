import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  createLoan(@Body() createLoanDto: CreateLoanDto) {
    return this.loansService.createLoan(createLoanDto);
  }

  @Get(':id')
  getLoanStatus(@Param('id', ParseIntPipe) id: string) {
    return this.loansService.getLoanStatus(+id);
  }
}