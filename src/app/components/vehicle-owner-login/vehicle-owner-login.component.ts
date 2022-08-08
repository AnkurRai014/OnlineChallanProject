import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Vehicleowner } from 'src/app/common/vehicleowner';

@Component({
  selector: 'app-vehicle-owner-login',
  templateUrl: './vehicle-owner-login.component.html',
  styleUrls: ['./vehicle-owner-login.component.css']
})
export class VehicleOwnerLoginComponent implements OnInit {

  listOfOwner: Vehicleowner[] = [];

  constructor(private route: Router,
              private service: ChallanServiceService,
              private activeRoute : ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {
      this.listOfVehicleOwner();
    });

  }
  loginSubmit(loginform: any) {
    var flag : boolean = true;
    for(var owner of this.listOfOwner){
      if ((loginform.vehiclePlateNumber === owner.vehiclePlateNumber) && (loginform.password === owner.password)) {
        this.service.setUserLoggedIn();
        this.service.vehicleOwner = (owner);
        console.log(owner.firstName);
        this.route.navigateByUrl("owner/homepage");
        flag = true;
        break;
      }
      else{
        flag = false;
      }
    }
    if(!flag){
      alert("Invalid Credentials");
    }
    else{
      alert("Login Successful");
    }
  }

  listOfVehicleOwner(){
    this.service.getAllVehicleOwners().subscribe(data =>{
      this.listOfOwner= data;
    })
  }
  back(){
    this.route.navigateByUrl("/")

   }
}
