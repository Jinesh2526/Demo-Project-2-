import { Component, Input, OnInit } from '@angular/core';
import { SamsungProduct} from '../../samsung-product';
@Component({
  standalone:true,
  selector: 'app-samsung-box-inside',
  templateUrl: './samsung-box-inside.component.html',
  styleUrls: ['./samsung-box-inside.component.css']
})
export class SamsungBoxInsideComponent implements OnInit {
@Input() samsungProduct!: SamsungProduct;
  constructor() { }

  ngOnInit() {
    console.log(this.samsungProduct);
  }

}