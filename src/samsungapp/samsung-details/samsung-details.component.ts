import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SamsungProduct } from '../samsung-product';

@Component({
  standalone: true,
  selector: 'app-samsung-details',
  templateUrl: './samsung-details.component.html',
  styleUrls: ['./samsung-details.component.css'],
})
export class SamsungDetailsComponent implements OnInit, OnChanges {
  @Input()selectedsam!: SamsungProduct;
  constructor() {}

  ngOnInit() {
    // console.log(this.selectedsam)
  }
  ngOnChanges() {
    // console.log(this.selectedsam);
  }
}
