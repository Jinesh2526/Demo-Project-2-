import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SamsungBoxInsideComponent } from './samsung-box-inside/samsung-box-inside.component';
import { SamsungProduct } from '../samsung-product';
import { SAMSUNG } from '../samsung-product-detail';

@Component({
  standalone: true,
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css'],
  imports: [SamsungBoxInsideComponent, CommonModule],
})
export class SamsungComponent implements OnInit {
  samsung: SamsungProduct[] = [];
  @Output() SamsungSelected = new EventEmitter<SamsungProduct>();
  constructor() {}

  ngOnInit() {
    this.samsung = SAMSUNG;
  }
  onSelected(SamsungProduct: SamsungProduct) {
    console.log(SamsungProduct);
    this.SamsungSelected.emit(SamsungProduct)
  }
}
