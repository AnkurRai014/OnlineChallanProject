import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-rto-report',
  templateUrl: './rto-report.component.html',
  styleUrls: ['./rto-report.component.css']
})
export class RtoReportComponent implements OnInit {

  challan: Challan = new Challan((0 as unknown as bigint), new Date(), "", (0 as unknown as bigint), "", (0 as unknown as bigint), "", "", 0, new Date(), new Date(), true, false, true, "");
  challans : Challan[];
  pincodeList : Challan[];
  pincodeCount : number;

  constructor(private service: ChallanServiceService,private route :Router) { }

  ngOnInit(): void {
    this.listOfChallans();
    this.uniqueList();
  }
  logout(){
    this.route.navigateByUrl("/rtologin")

   }
   back(){
    this.route.navigateByUrl("rto/homepage")

   }

  listOfChallans(){
    this.service.getAllChallans().subscribe(data =>{
      // console.log(data);
      this.challans = data;
    }
    )
  }

  uniqueList(){
    this.pincodeList.push(this.challans[0])
    for(let chal of this.challans){
      for(let pinChal of this.pincodeList){
        if(chal.pincode !== pinChal.pincode){
          this.pincodeList.push(chal);
        }
        else{
          this.pincodeList.push(chal);
        }
      }
    }
    return this.pincodeList;
  }

  onSubmit(pincode:any){
    let pin = parseInt(pincode);
    let pincount = 0;
    for(let chal of this.challans){
      let chalPin = (chal.pincode as unknown as number)
      if(chalPin === pin){
        pincount += 1;
        this.pincodeCount = pincount
      }
    }
    console.log(pincount)
    this.pincodeCount = pincount;
    console.log(this.pincodeCount)
  }

}
