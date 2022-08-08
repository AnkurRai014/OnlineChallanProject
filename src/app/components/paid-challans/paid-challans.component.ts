import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-paid-challans',
  templateUrl: './paid-challans.component.html',
  styleUrls: ['./paid-challans.component.css']
})
export class PaidChallansComponent implements OnInit {

  challans : Challan[]



  constructor(private service : ChallanServiceService, private route : Router, private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.getPaidChallan();
  }

  disputechallan(challanId:bigint){

    //   // this.service.disputechallan(this.challanId).subscribe(data => {console.log("Disputed")
    //   // this.disputechallans();
    // });
    }


 paychallan(challanId:bigint){

    // // this.service.getProductByName(this.prodName).subscribe(data => {
    // //   console.log(data);
    // //   this.products = data;
    // });
  }

  getPaidChallan(){
    this.service.getChallanByVehicleAndPaid(this.service.vehicleOwner.vehiclePlateNumber,true).subscribe(data=>{
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
