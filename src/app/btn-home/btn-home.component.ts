import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeApiService } from '../consume-api.service';

@Component({
  selector: 'app-btn-home',
  templateUrl: './btn-home.component.html',
  styleUrls: ['./btn-home.component.scss'],
})
export class BtnHomeComponent implements OnInit {
  @Input() path: string = '/data';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToUrl() {
    this.router.navigateByUrl(this.path);
  }
}
