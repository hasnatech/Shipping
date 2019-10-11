import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  constructor(private service: CommonService) { }

  data;

  ngOnInit() {
    this.data = this.service.getProducts();
  }




  formValue = [{
    "name": "Name",
    "type": "text",
    "rule": "required",
    "value": ""
  },
  {
    "name": "Code",
    "type": "text",
    "rule": "required",
    "value": ""
  }, {
    "name": "Container Number",
    "type": "text",
    "rule": "required",
    "value": ""
  },
  {
    "name": "Container Type",
    "type": "text",
    "rule": "required",
    "value": ""
  }, {
    "name": "Quantity",
    "type": "text",
    "rule": "required",
    "value": ""
  }, {
    "name": "Units",
    "type": "number",
    "rule": "required",
    "value": ""
  }, {
    "name": "Waste Code",
    "type": "text",
    "rule": "required",
    "value": ""
  }
  ];

}
