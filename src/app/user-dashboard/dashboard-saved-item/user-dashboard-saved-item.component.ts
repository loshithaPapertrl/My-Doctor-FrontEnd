import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'll-dashboard-saved-item',
  templateUrl: './user-dashboard-saved-item.component.html',
  styleUrls: ['./user-dashboard-saved-item.component.scss']
})
export class UserDashboardSavedItemComponent implements OnInit {
  view = 'list';

  products;
  constructor() {}

  ngOnInit(): void {
    this.products = productsDB.Product;
  }
}
