import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  pricePointsList: any;
  displayedColumns: string[] = ['storenumbers', 'price'];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getPricePointsList();
  }
  getPricePointsList() {
    this.commonService.httpGet('./assets/resources/home.data.json').subscribe(data => {
      console.log('detais');
      console.log(data);
      this.pricePointsList = data;
    });
  }
  pricepointsmodal(data, index) {

  }
}
