import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  list: Product[];

  constructor(private router: Router) {
    this.list = JSON.parse(localStorage.getItem('productList') || '[]');
  }

  ngOnInit(): void {
  }
  goToAdd()
  {
    this.router.navigateByUrl('add');
  }

}
