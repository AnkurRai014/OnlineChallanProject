import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  vehicleownerlogin(){
    this.route.navigateByUrl("/vehicleownerlogin")
  }
  rtologin(){
    this.route.navigateByUrl("/rtologin")
  }
}
