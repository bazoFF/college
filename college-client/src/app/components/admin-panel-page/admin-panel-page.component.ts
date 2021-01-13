import { Component, OnInit } from '@angular/core';
import { IBank } from '../../models/bank';
import { BankService } from "../../services/bank.service";

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent implements OnInit {
  loading: boolean = false;
  banks: IBank[];
  banksColumns: string[] = ['name', 'rate'];

  constructor(private bankService: BankService) {}

  ngOnInit() {
    this.bankService.get().subscribe(banks => {
      this.banks = banks;
    });
  }
}
