import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { SamsungDetailsComponent } from './samsung-details/samsung-details.component';
import { SamsungProduct } from './samsung-product';
import { SamsungComponent } from './samsung/samsung.component';


@Component({
  standalone:true,
  selector: 'app-samsungapp',
  templateUrl: './samsungapp.component.html',
  styleUrls: ['./samsungapp.component.css'],
  imports: [SamsungComponent,SamsungDetailsComponent]
})
export class SamsungappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSamsungSelected(samsung:SamsungProduct)
  {
    console.log(samsung);
    
  }
}