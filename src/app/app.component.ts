import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Product =[
    {id:1,name:"KGF",category:"action"},
    {id:2,name:"Bang Bang",category:"action"}];
}
