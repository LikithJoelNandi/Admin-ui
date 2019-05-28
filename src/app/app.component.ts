import { Component, TemplateRef } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
/* import { Router } from '@angular/router'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsp-admin';
  online:boolean = false;

   constructor(private dataService : DataStorageService) {
 
   } 
  ngOnInit(){
    this.online =false;
  }

}