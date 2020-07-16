import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productList:Product[]=[];
product: Product;
pid:number;
pname:string;
stock:number;
price:number;
list:Product[];
  constructor() {
    this.product=new Product();
    // store in localstorage in form of string
    if(localStorage.getItem('productList'))
    {
      this.productList=JSON.parse(localStorage.getItem('productList'))
    }
   }

  ngOnInit(): void {
  }
  AddItem()
  {
    this.product = {pid: this.pid, pname: this.pname, stock: this.stock, price: this.price};
    // get productList from localstorage and convert to list
    this.productList.push(this.product)
    console.log("ddddddd")
    console.log(JSON.stringify(this.productList))
    // store back
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }

}