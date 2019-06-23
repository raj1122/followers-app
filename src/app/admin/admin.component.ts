import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[];

  // constructor(private orderService: OrderService) { }

  constructor(private authService: OrderService) { }

  ngOnInit() {

    this.loadOrders();

  }

  private loadOrders() {
    // console.log('admin ordrs' , this.authService.getOrders()) ;

    this.authService.getOrders().pipe(first()).subscribe((users: any) => {
      console.log('inside load allorder' , users.orders );
      this.orders = users.orders;

    });
  }
}
