import { Component } from '@angular/core';
import {data,responsedata,getAllstationsinbetween,passengertype,passengerLogin} from '../interface';
import{StationserviceService} from '../services/stationservice.service';
import{Route}from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  passengerData:passengertype=new passengertype()
  LoginData:passengerLogin= new passengerLogin()
  shownavlogin:boolean=true
  shownavregister:boolean=true
  shownavlogout:boolean=false
  constructor(private http :StationserviceService,){
    let passenger=localStorage.getItem("Passenger")
    if(passenger){
      this.shownavlogin=false
      
      this.shownavlogout=true
    }
  }
  RegisterPassenger(){
    
    this.http.Register(this.passengerData).subscribe((res:responsedata)=>{
    if(res.result){
      alert("registration succes")
      
      
    }
    else{
      alert("not")
    }
    })
    let btn=document.getElementById("regbutn");
    btn?.click()
    
  
  } 
  
  LoginPassenger(){
     this.http.Login(this.LoginData).subscribe((res:responsedata)=>{
             localStorage.setItem("Passenger",JSON.stringify(res.data))
             
             if(res.result){
              alert("Login succes")
            
              
         
            }
            else{
              alert("wrong")
            }
     })
  }

  Logout(){
    localStorage.removeItem("Passenger")
  }
  
}
