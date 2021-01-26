import { Component, OnInit } from '@angular/core';
import { IBank } from '../../models/bank';
import { BankService } from "../../services/bank.service";
import { IPerson } from '../../models/person';
import { ILoan } from '../../models/loan-request';
import { PersonService } from '../../services/person.service';
import { combineLatest } from 'rxjs';
import { LoanService } from '../../services/loan.service';
import { ITableColumn } from '../../models/table';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent implements OnInit {
  loading: boolean = true;
  banks: IBank[];
  people: IPerson[];
  loans: ILoan[];

  banksColumns: ITableColumn[];
  peopleColumns: ITableColumn[];
  loansColumns: ITableColumn[];

  constructor(private bankService: BankService, private personService: PersonService, private loanService: LoanService) {}

  ngOnInit() {
    this.setupColumns();
    this.load();
  }

  private setupColumns() {
    this.banksColumns = [
      {
        name: 'name',
        header: 'Название банка'
      },
      {
        name: 'rate',
        header: 'Процентная ставка'
      }
    ];
  }

  private load() {
    combineLatest([
      this.bankService.get(),
      this.personService.get(),
      this.loanService.get()
    ]).subscribe(([banks, people, loans]) => {
      this.banks = banks;
      this.people = people;
      this.loans = loans;

      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
}
