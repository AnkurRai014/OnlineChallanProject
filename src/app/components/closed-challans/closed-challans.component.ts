import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-closed-challans',
  templateUrl: './closed-challans.component.html',
  styleUrls: ['./closed-challans.component.css']
})
export class ClosedChallansComponent implements OnInit {

  challans : Challan[];

  constructor(private service : ChallanServiceService, private route : Router) { }

  ngOnInit(): void {
    this.getDisputedChallan();
  }
  logout(){
    this.route.navigateByUrl("/rtologin")

   }
   back(){
    this.route.navigateByUrl("rto/homepage")

   }

  getDisputedChallan(){
    this.service.getChallanByPoliceAndPaid(this.service.policeOfficer.personalId,true).subscribe(data=>{
      console.log(data);
      this.challans = data;
    })
  }

}
