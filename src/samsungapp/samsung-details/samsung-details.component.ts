import { Component, Input, OnInit } from '@angular/core';
import { SamsungProduct } from '../samsung-product';

@Component({
  standalone:true,
  selector: 'app-samsung-details',
  templateUrl: './samsung-details.component.html',
  styleUrls: ['./samsung-details.component.css']
})
export class SamsungDetailsComponent implements OnInit {
 @Input()
selectedsam?: SamsungProduct;
  constructor() { 
    console.log(this.selectedsam)
  }

  ngOnInit() {
  }

}