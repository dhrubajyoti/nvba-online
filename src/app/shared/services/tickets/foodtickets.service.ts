
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodticketsService {
  ticketsitems!: Observable<any[]>; 

  constructor(private db: AngularFireDatabase) {
    this.ticketsitems = db.list('/kp2023').valueChanges();
  }

  GetTicketsList() {
      return this.ticketsitems;
  }
}
