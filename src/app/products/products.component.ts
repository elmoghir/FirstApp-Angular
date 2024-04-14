import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products:any;
  public keyword:string="";
  constructor() {
  }
  ngOnInit() {
    this.products =  [
      {"id":1,"name":"product1","price":2300},
      {"id":2,"name":"product4","price":3300},
      {"id":3,"name":"product3","price":4300},
      {"id":4,"name":"product4","price":5300}
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);
  }

  search() {
    console.log(this.keyword);
    let result = [];
    for(let p of this.products)
    {
      if(p.name.includes(this.keyword))
      {
        result.push(p);
      }
    }
    this.products = result;
  }
}
