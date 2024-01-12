import { Injectable } from '@angular/core';
import { TransactionHistory } from '../interfaces/transaction-history';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmHistoryService {
  private _transactionHistory: TransactionHistory[] = [];
  private _behaviorSubject: BehaviorSubject<TransactionHistory[] | null> = new BehaviorSubject<TransactionHistory[] | null>(null);

  constructor() { }

  public getTransactionHistory(): Observable<TransactionHistory[] | null> { return this._behaviorSubject.asObservable(); }

  public addHistory(transactionHistory: TransactionHistory): boolean {
    this._transactionHistory.push(transactionHistory);
    this._behaviorSubject.next(this._transactionHistory);
    return true;
  }
}
