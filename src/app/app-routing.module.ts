import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
  path:'',  redirectTo:'Home' , pathMatch:'full'
},
 {
  path:'Home',component:HomeComponent
 },
 {
  path:'search/:fromstationId/:tostationId/:Dateoftravel',component:SearchComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
