import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.css']
})
export class TacosComponent implements OnInit {
  tacos;

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.apiService.getTacos().subscribe((data)=>{
      this.tacos = data;
    });
  }

}
