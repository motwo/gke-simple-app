import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.sass']
})
export class ApiComponent implements OnInit {
  value$ = new Observable<string>();

  constructor(private apiService: ApiService) {
    this.value$ = this.apiService.get();
  }

  ngOnInit() {
  }

}
