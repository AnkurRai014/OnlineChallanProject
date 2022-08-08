import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Vehicleowner } from 'src/app/common/vehicleowner';

@Component({
  selector: 'app-vehicle-owner-home-page',
  templateUrl: './vehicle-owner-home-page.component.html',
  styleUrls: ['./vehicle-owner-home-page.component.css']
})
export class VehicleOwnerHomePageComponent implements OnInit {

  vehicleOwner : Vehicleowner = this.service.vehicleOwner;

  ownerFirstName : string = this.vehicleOwner.firstName;

  constructor(private route : Router,
              private service : ChallanServiceService,
              private activeRoute: ActivatedRoute
              ) { }



  ngOnInit(): void {
    console.log(this.vehicleOwner);
  }

  pendingchallan(){
    this.route.navigateByUrl('owner/pendingchallan')
  }
  paidchallan(){
    this.route.navigateByUrl('owner/paidchallan')
  }

  logout(){
    this.route.navigateByUrl("/vehicleownerlogin")

  }

}
