import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  orders = [];
  constructor() {}

  ngOnInit(): void {
    this.orders = [
      {
        id: '01',
        orderBy: 'Samantha Fernando',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'complated',
        price: 2145.0
      },
      {
        id: '02',
        orderBy: 'Kasun Sadeera',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'pending',
        price: 2145.0
      },
      {
        id: '03',
        orderBy: 'Priyankara perera',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'rejected',
        price: 2145.0
      },
      {
        id: '04',
        orderBy: 'anjana wijesekara',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'initialized',
        price: 2145.0
      },
      {
        id: '05',
        orderBy: 'Loshitha hasaral',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'complated',
        price: 2145.0
      }
    ];
  }
}
