import { Dashb, DashbService } from './../../services/dashb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class DashbComponent implements OnInit {
  dashb: Dashb[] = [];
  constructor(private dashbService: DashbService){}
  ngOnInit(): void {
    this.dashbService.getDashb().subscribe((data: Dashb[]) => {
      this.dashb = data;
    });
  }

}
