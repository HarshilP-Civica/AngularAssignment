import { Injectable } from '@angular/core';

@Injectable()
export class Discount {
  public coupounValue: boolean = false;

  constructor() {
    console.log("dis model updated: ", this.coupounValue);
  }

  setCouponValue()
  {
    this.coupounValue = true;
  }
}
