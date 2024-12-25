import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {data,responsedata,getAllstationsinbetween,passengertype,passengerLogin} from '../interface';
import { environment } from 'src/environments/environment'; 
import{CONSTANT}from '../constant/const'

@Injectable({
  providedIn: 'root'
})
export class StationserviceService {
apiendpoint:string=""
  constructor( private http:HttpClient) {
    this.apiendpoint=environment.ApiEndPoint
   }
    

  getallStations():Observable<responsedata>{
    return this.http.get<responsedata>(this.apiendpoint + CONSTANT.ENDPOINTS.GET_ALL_STATIONS)
  }

  getAllTrainsBetweenStation(from:number,to:number,date:string):Observable<responsedata>{
     return this.http.get<responsedata>(this.apiendpoint+`GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`)
  }

  Register(data:passengertype){
    return this.http.post<responsedata>(this.apiendpoint+`AddUpdatePassengers`,data)
  }

  Login(data:passengerLogin):Observable<responsedata>{
    return this.http.post<responsedata>(this.apiendpoint + `Login`,data)
  }

  Bookings(data:any):Observable<responsedata>{
    return this.http.post<responsedata>(this.apiendpoint+ `BookTrain`,data)
  }
}
