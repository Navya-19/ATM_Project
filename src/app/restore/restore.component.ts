import { Component } from '@angular/core';
import { CurrencyValue } from '../enum/currency-value';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from '../services/atm-history.service';
import { AtmStateService } from '../services/atm-state.service';
import { TransactionHistory } from '../enum/transaction-history-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore',
  standalone: true,
  imports: [],
  templateUrl: './restore.component.html',
  styleUrl: './restore.component.css'
})
export class RestoreComponent {
// ones=10;
// fives=10;
// tens=10;
// twentys=10;
// fiftys=10;
// hundreds=10;
public restockForm!: FormGroup;
public restockSuccessFull: boolean = false;

constructor( private atmHistoryService: AtmHistoryService,
  public atmStateService: AtmStateService,
  private router:Router) { }

ngOnInit(): void {
  this.restockForm = new FormGroup({
    amountHundread: new FormControl(0, Validators.min(0)),
    amountFifty: new FormControl(0, Validators.min(0)),
    amountTwenty: new FormControl(0, Validators.min(0)),
    amountTen: new FormControl(0, Validators.min(0)),
    amountFive: new FormControl(0, Validators.min(0)),
    amountOne: new FormControl(0, Validators.min(0))
  });
}

public restock(): void {
  this.updateInventory();
  this.restockSuccessFull = true;
  this.logHistory();
  this.reset();
  // this.router.navigate(['/dashboard'])
}

private logHistory(): void {
  this.atmHistoryService.addHistory({
    type: TransactionHistory[TransactionHistory.restock],
    message: 'Hundreads restocked: ' + this.restockForm.controls['amountHundread'].value + ' ' +
             'Fifties restocked: ' + this.restockForm.controls['amountFifty'].value + ' ' +
             'Twenties restocked: ' + this.restockForm.controls['amountTwenty'].value +  ' ' +
             'Tens restocked: ' + this.restockForm.controls['amountTen'].value +  ' ' +
             'Fives restocked: ' + this.restockForm.controls['amountFive'].value +  ' ' +
             'Dolalrs restocked: ' + this.restockForm.controls['amountOne'].value,
    date: new Date()
  });
}

private reset(): void {
  this.restockForm.controls['amountHundread'].setValue(0);
  this.restockForm.controls['amountFifty'].setValue(0);
  this.restockForm.controls['amountTwenty'].setValue(0);
  this.restockForm.controls['amountTen'].setValue(0);
  this.restockForm.controls['amountFive'].setValue(0);
  this.restockForm.controls['amountOne'].setValue(0);
}

private updateInventory(): void {
  this.atmStateService.addStock(CurrencyValue.hundread, this.restockForm.controls['amountHundread'].value);
  this.atmStateService.addStock(CurrencyValue.fifty, this.restockForm.controls['amountFifty'].value);
  this.atmStateService.addStock(CurrencyValue.twenty, this.restockForm.controls['amountTwenty'].value);
  this.atmStateService.addStock(CurrencyValue.tens, this.restockForm.controls['amountTen'].value);
  this.atmStateService.addStock(CurrencyValue.five, this.restockForm.controls['amountFive'].value);
  this.atmStateService.addStock(CurrencyValue.dollar, this.restockForm.controls['amountOne'].value);
}


}
