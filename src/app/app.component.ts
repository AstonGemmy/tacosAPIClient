import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  linkText = 'See Taco Recipes';
  tacos;

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.apiService.getTacos().subscribe((data)=>{
      this.tacos = data;
    });
  }
  
}
