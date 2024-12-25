export interface data{
    stationID:number,
    stationName:string,
    stationCode:string,
}

 export interface responsedata{
    message: any,
    result: boolean,
    data:any,
 }
export class Search{
   fromstationId:number;
   tostationId:number;
   Dateoftravel:string;

   constructor(){
      this.fromstationId=0;
      this.tostationId=0;
      this.Dateoftravel=""
   }

}

 export interface getAllstationsinbetween{
    trainId:number,
    trainNo:number,
    trainName:string,
    departureStationName:string,
    arrivalStationName:string,
    arrivalTime:string,
    departureTime:string,
    totalSeats:number,
    departureDate:string,
    bookedSeats:number,

 }

 export class passengertype{
   passengerID: 0;
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
  password : string;

  constructor(){
   this.passengerID=0,
   this.firstName="",
   this.lastName="",
   this.email="",
   this.phone="",
   this.password=""
  }
 }

 export class passengerLogin{
   phone: string;
   password : string;

   constructor(){
      this.phone=""
      this.password=""
   }
 }