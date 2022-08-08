import { Component, OnInit } from '@angular/core';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Policeofficer } from 'src/app/common/policeofficer';
@Component({
  selector: 'app-rto-login',
  templateUrl: './rto-login.component.html',
  styleUrls: ['./rto-login.component.css']
})
export class RtoLoginComponent implements OnInit {

  listOfOfficers: Policeofficer[] = [];

  constructor(private route: Router,
              private service: ChallanServiceService,
              private activeRoute : ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {
      this.listOfPoliceOfficers();
    });

  }
  loginSubmit2(loginform: any) {
    var flag : boolean = true;
    for(var officer of this.listOfOfficers){
      if ((loginform.personelId === officer.personalId) && (loginform.password === officer.password)) {
        this.service.policeOfficer = (officer);
        console.log(officer.firstName);
        this.route.navigateByUrl("rto/homepage");
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

  listOfPoliceOfficers(){
    this.service.getAllPoliceOfficers().subscribe(data =>{
      // console.log(data);
      this.listOfOfficers= data;
    })
  }
  back(){
    this.route.navigateByUrl("/")

   }
}
