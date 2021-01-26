import { Component, OnInit } from '@angular/core';
import { IBank } from '../../models/bank';
import { BankService } from "../../services/bank.service";
import { ILoan } from '../../models/loan';
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
  loans: ILoan[];

  banksColumns: ITableColumn[];
  loansColumns: ITableColumn[];

  // todo: добавить адаптивность
  // todo: добавить возможные CRUD операции для банков

  constructor(private bankService: BankService, private loanService: LoanService) {}

  ngOnInit() {
    this.load();
    this.setupColumns();
  }
  private load() {
    combineLatest([
      this.bankService.getAll(),
      this.loanService.getAll()
    ]).subscribe(([banks, loans]) => {
      this.banks = banks;
      this.loans = loans;

      this.loading = false;
    }, () => {
      this.loading = false;
    });
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

    this.loansColumns = [
      {
        name: 'bank',
        header: 'Название банка',
      },
      {
        name: 'person',
        header: 'ФИО заёмщика',
      },
      {
        name: 'monthlyPayment',
        header: 'Ежемесячный платёж'
      },
      {
        name: 'price',
        header: 'Цена недвижимости'
      },
      {
        name: 'deposit',
        header: 'Первоначальный взнос'
      },
      {
        name: 'duration',
        header: 'Срок кредита'
      },
    ];
  }
}
