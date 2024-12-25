import { Component ,OnInit} from '@angular/core';
import {StationserviceService} from '../services/stationservice.service';
import {data,responsedata} from '../interface';
import { FormsModule } from '@angular/forms';
import{Router} from '@angular/router'

@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit{
allStations:data[]=[]
fromstationId:number=0;
tostationId:number=0;
Dateoftravel:string="";
constructor(private http:StationserviceService, private route:Router){

}
ngOnInit(): void {
 this.gettingStations()
}

gettingStations(){
  this.http.getallStations().subscribe((result:any)=>{
     this.allStations=result.data
  },error=>{ 
    alert("Error")
  } )
 
}
OnSearch(){
   this.route.navigate(['/search',this.fromstationId,this.tostationId,this.Dateoftravel])
}
}
