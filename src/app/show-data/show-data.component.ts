import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeApiService } from '../consume-api.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss'],
  providers: [ConsumeApiService],
})
export class ShowDataComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
  ];
  dataSource: any;
  constructor(private cosume_api: ConsumeApiService, private router:Router) {}
  ngOnInit(): void {
    let obj = this.cosume_api.loadData();
    obj.subscribe((data) => {
      this.dataSource = data.data;
      console.log(this.dataSource);
    });
  }

  clearData(){
    this.dataSource = []
  }

  routeToUrl() {
    this.router.navigateByUrl("/");
  }
}
