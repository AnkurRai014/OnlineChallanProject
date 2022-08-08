import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challan } from 'src/app/common/challan';
import { ChallanServiceService } from 'src/app/challan-service.service';
// import { DisputedChallansComponent } from '../disputed-challans/disputed-challans.component';

@Component({
  selector: 'app-pending-challans',
  templateUrl: './pending-challans.component.html',
  styleUrls: ['./pending-challans.component.css']
})
export class PendingChallansComponent implements OnInit {
  challans : Challan[]
  challan : Challan



  constructor(private service : ChallanServiceService, private route : Router, private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.getPendingChallan();
  }

  disputeChallan(challanId:bigint){
    this.route.navigateByUrl("owner/pendingchallan/dispute/" + challanId);
  }


 payChallan(challanId:bigint){
  this.route.navigateByUrl("owner/pendingchallan/payment/" + challanId);
  }

  getPendingChallan(){
    this.service.getChallanByVehicleAndPaidAndDisputed(this.service.vehicleOwner.vehiclePlateNumber,false,false).subscribe(data=>{
      console.log(data);
      this.challans = data;
    })
  }

  logout(){
    this.route.navigateByUrl("/vehicleownerlogin")

   }
back(){
  this.route.navigateByUrl("owner/homepage")

 }
  }
