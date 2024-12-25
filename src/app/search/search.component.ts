import {Component ,OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{StationserviceService} from '../services/stationservice.service';
import{responsedata,getAllstationsinbetween,data,Search,passengertype}from '../interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

GettingTrains :getAllstationsinbetween[]=[];
allStations:data[]=[];
SearchData:Search= new Search()
FromStationName:any=""
toStationName:any=""
Date:any=""
selectedTrain?:getAllstationsinbetween;
passengres:any={
      "passengerName": "",
      "age": ""
}
passengerList:any[]=[]
loggedUserData:passengertype=new passengertype()
constructor( private activatedroute : ActivatedRoute,private http:StationserviceService){
  this.activatedroute.params.subscribe((res:any)=>{
    
    this.SearchData.fromstationId=res.fromstationId
    this.SearchData.tostationId=res.tostationId
    this.SearchData.Dateoftravel=res.Dateoftravel
    this.getTrainsBetweenStation()
    })
    console.log(this.SearchData.fromstationId)
    let Singlepassenger = localStorage.getItem("Passenger");
    if(Singlepassenger!=null){
      this.loggedUserData=JSON.parse(Singlepassenger)
    }
}
ngOnInit(): void {
   this.gettingStations()
  this.Date=this.activatedroute.snapshot.paramMap.get("Dateoftravel")
 }
 
 gettingStations(){
   this.http.getallStations().subscribe((result:any)=>{
      this.allStations=result.data
   })
 }


getTrainsBetweenStation(){
  this.http.getAllTrainsBetweenStation(this.SearchData.fromstationId,this.SearchData.tostationId,this.SearchData.Dateoftravel).subscribe((res:responsedata)=>{
 this.GettingTrains=res.data

  })
}

ModifySrch(){
  this.http.getAllTrainsBetweenStation(this.SearchData.fromstationId,this.SearchData.tostationId,this.SearchData.Dateoftravel).subscribe((res:responsedata)=>{
    this.GettingTrains=res.data  
})

}
Booktrain(item:getAllstationsinbetween){
this.selectedTrain=item
}

bookTickets(){
  let Singlepassenger = localStorage.getItem("Passenger");
  if(Singlepassenger!=null){
    const bookobj={
    
      "bookingId": 0,
      "trainId": this.selectedTrain?.trainId,
      "passengerId": this.loggedUserData.passengerID,
      "travelDate": this.SearchData.Dateoftravel,
      "bookingDate": new Date,
      "totalSeats": this.passengerList.length,
      "TrainAppBookingPassengers": [] as any
  }
  bookobj.TrainAppBookingPassengers=this.passengerList;
  bookobj.totalSeats=this.passengerList.length;
console.log(bookobj)
  this.http.Bookings(bookobj).subscribe((res:any)=>{
    if(res.result){
      alert("tickets booked")
    }
    else {
       alert("tickets not booked")
    }

  })
  }
  else{
    alert("Please Login")
  }

}

addPassenger(){
  const strObj=JSON.stringify(this.passengres)
  const prseObj=JSON.parse(strObj)
  this.passengerList.push(prseObj)
}
}