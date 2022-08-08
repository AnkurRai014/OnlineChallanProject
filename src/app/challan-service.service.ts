import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Policeofficer } from './common/policeofficer';
import { Vehicleowner } from './common/vehicleowner';
import { Challan } from './common/challan';

@Injectable({
  providedIn: 'root'
})
export class ChallanServiceService {

  vehicleOwner : Vehicleowner;
  policeOfficer : Policeofficer;
  challan : Challan;

  isUserLoggedIn = false

  private policeOfficeUrl = "http://localhost:8080/rto/trafficofficer";
  private vehicleownerurl = "http://localhost:8080/rto/vehicleowner";
  private challanurl = "http://localhost:8080/rto/challan";
  constructor(private httpclient : HttpClient) { }

  getLoggedIn(){
    return this.isUserLoggedIn;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  setUserLoggedOut(){
    this.isUserLoggedIn=false;
  }

  getAllPoliceOfficers() : Observable<Policeofficer[]>{
    return this.httpclient.get<getPoliceOfficerResponse>(this.policeOfficeUrl).pipe(map(response => response._embedded.policeOfficers));
  }
  getAllVehicleOwners() : Observable<Vehicleowner[]>{
    return this.httpclient.get< getVehicleOwnerResponse>(this.vehicleownerurl).pipe(map(response => response._embedded.vehicleOwners));
  }
  getAllChallans() : Observable<Challan[]>{
    return this.httpclient.get< getChallanResponse>(this.challanurl).pipe(map(response => response._embedded.challans));
  }

  saveChallan(challan: Challan){
    console.log(challan)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    };
    return this.httpclient.post<Challan>(this.challanurl,challan,httpOptions);
  }

  getChallanById(challanId:bigint): Observable<Challan>{
    const challanUrl =this.challanurl+"/"+challanId;

    return this.httpclient.get<Challan>(challanUrl);
  }

  updateChallan(challan:Challan): Observable<Challan>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    }
    return this.httpclient.put<Challan>(this.challanurl+`/${challan.challanId}`,challan,httpOptions)
  }

  getChallanByPoliceAndDisputedAndPaid(personalId:bigint, disputed : boolean, paid : boolean): Observable<Challan[]>{
    const challanByDisputeUrl = "http://localhost:8080/rto/challan/search/findByPolicePersonelIdAndChallanClosedAndChallanDisputed?policePersonalId="+personalId +"&challanClosed="+paid+"&challanDisputed="+disputed;
    return this.httpclient.get<getChallanResponse>(challanByDisputeUrl).pipe(map(response => response._embedded.challans));
  }

  getChallanByPoliceAndPaid(personalId:bigint, paid : boolean): Observable<Challan[]>{
    const challanByDisputeUrl = "http://localhost:8080/rto/challan/search/findByPolicePersonelIdAndChallanClosed?policePersonalId="+personalId +"&challanClosed="+paid;
    return this.httpclient.get<getChallanResponse>(challanByDisputeUrl).pipe(map(response => response._embedded.challans));
  }

  getChallanByVehicleAndPaid(vehiclePlateNumber : string, paid : boolean): Observable<Challan[]>{
    const challanByPaidUrl = "http://localhost:8080/rto/challan/search/findByVehiclePlateNumberAndChallanClosed?vehiclePlateNumber="+vehiclePlateNumber+"&challanClosed="+paid;
    return this.httpclient.get<getChallanResponse>(challanByPaidUrl).pipe(map(response => response._embedded.challans));
  }

  getChallanByVehicleAndPaidAndDisputed(vehiclePlateNumber : string, paid : boolean, disputed : boolean): Observable<Challan[]>{
    const challanByPaidUrl = "http://localhost:8080/rto/challan/search/findByVehiclePlateNumberAndChallanClosedAndChallanDisputed?vehiclePlateNumber="+vehiclePlateNumber+"&challanClosed="+paid+"&challanDisputed="+disputed;
    return this.httpclient.get<getChallanResponse>(challanByPaidUrl).pipe(map(response => response._embedded.challans));
  }
}

interface getPoliceOfficerResponse{
  _embedded : {
    policeOfficers : Policeofficer[]

  }

}
interface getVehicleOwnerResponse{
  _embedded : {
    vehicleOwners : Vehicleowner[]
  }
}
interface getChallanResponse{
  _embedded : {
    challans : Challan[]
  }
}
