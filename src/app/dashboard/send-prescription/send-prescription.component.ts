import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'll-dashboard-send-prescription',
  templateUrl: './send-prescription.component.html',
  styleUrls: ['./send-prescription.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SendPrescription implements OnInit {
  view = 'list';

  products;
  constructor() {}

  ngOnInit(): void {
    this.products = productsDB.Product;
  }
}
