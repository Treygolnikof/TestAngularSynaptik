import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from '../item';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShoplistService {

  private dataUrl = 'api/data';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  public getData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dataUrl)
    .pipe(
      tap(_ => this.log('fetched items')),
      catchError(this.handleError<Item[]>('getData', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.dataUrl, item, httpOptions).pipe(
      tap((newItem: Item) => this.log('Item successfully added')),
      catchError(this.handleError<Item>('addItem'))
    );
  }
}
