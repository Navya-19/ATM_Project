import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from '../services/atm-history.service';
import { AtmStateService } from '../services/atm-state.service';
import { CommonModule } from '@angular/common';
import { TransactionHistory } from '../enum/transaction-history-type';


@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent implements OnInit{
  public withdrawlAmount: number = 0;
  public withdrawForm!: FormGroup;
  public withdrawlSuccessFull: Boolean = false;

  constructor(
    private atmHistoryService: AtmHistoryService,
    private atmStateService: AtmStateService
  ) { }

  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      withdrawlAmount: new FormControl(0, Validators.min(0))
    });
  }

  public processWithdrawl(): void {
    this.withdrawlAmount = this.withdrawForm.controls['withdrawlAmount'].value;
    this.withdrawlSuccessFull = this.atmStateService.processWithdrawl(this.withdrawlAmount)
    this.logHistory();
    this.withdrawForm.controls['withdrawlAmount'].setValue(0);
  }

  private logHistory(): void {
    this.atmHistoryService.addHistory({
      type: TransactionHistory[TransactionHistory.withdrawl],
      message: 'Attempt to Withdraw of ' + this.withdrawlAmount + ((this.withdrawlSuccessFull) ? ' was a success' : ' failed, insufficient funds'),
      date: new Date()
    });
  }



}
