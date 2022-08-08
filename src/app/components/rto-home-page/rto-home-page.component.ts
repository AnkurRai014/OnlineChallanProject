import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Policeofficer } from 'src/app/common/policeofficer';

@Component({
  selector: 'app-rto-home-page',
  templateUrl: './rto-home-page.component.html',
  styleUrls: ['./rto-home-page.component.css']
})
export class RtoHomePageComponent implements OnInit {

  policeOfficer : Policeofficer = this.service.policeOfficer;

  constructor(private route : Router, private service : ChallanServiceService) { }

  ngOnInit(): void {
    console.log(this.policeOfficer);
  }

  newchallan(){
    this.route.navigateByUrl("rto/addchallan")
  }
  viewdisputes(){
    this.route.navigateByUrl("rto/disputedchallan")
  }

  viewClosed(){
    this.route.navigateByUrl("rto/closedchallan")
  }

  viewreports(){
    this.route.navigateByUrl("rto/reports")
  }

  logout(){
    this.route.navigateByUrl("/rtologin")
  }

}
