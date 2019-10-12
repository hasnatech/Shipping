import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  private _barcode;
  setBarCode(code: string) {
    this._barcode = code;
  }
  getBarCode() {
    return this._barcode;
  }
  getProduct(c: any): any {
      return this.product.filter(item => item.code == c)[0];
  }
  getProducts(){
    return this.product;
  }

  getInbound(c: any): any {
    return this.inbound.filter(item => item.epa_id_number == c)[0];
  }
  getInbounds(){
    return this.inbound;
  }

  product = [{
    name:"Non RCRA HAZARDOUS WASTE SOLID",
    code:"9840033126",
    container_no:"001",
    container_type:"DM",
    quantity:"100",
    unit:"",
    waste_code:"352"
  },{
    name:"Product 1",
    code:"10001",
    container_no:"001", 
    container_type:"DM",
    quantity:"50",
    unit:"",
    waste_code:"154"
  },{
    name:"Product 2",
    code:"45005",
    container_no:"004",
    container_type:"DM",
    quantity:"70",
    unit:"",
    waste_code:"877"
  },]
  //"epa_id_number": "CAD028277036",
  inbound = [{
    "name": "World Oil Environmental Services",
    "epa_id_number": "9840033126",
    "manifest_no": "CH00109",
    "profile_no": "",
    "waste_type": "Drained Used Oil Filters",
    "no_of_container": "71",
    "type": "DM",
    "total_gallons": "",
    "total_lbs": "35,000",
  },
  {
    "name": "Guidos Auto Precision",
    "epa_id_number": "CAL000386161",
    "manifest_no": "019150080JJK",
    "profile_no": "",
    "waste_type": "Oily Paper, Plastic Filters, Debris",
    "no_of_container": "1",
    "type": "DM",
    "total_gallons": "",
    "total_lbs": "100",
  },
  {
    "name": "Sutter Home Vineyards Inc",
    "epa_id_number": "CAL000171777",
    "manifest_no": "019150099JJK",
    "profile_no": "",
    "waste_type": "Oily Solids",
    "no_of_container": "1",
    "type": "DM",
    "total_gallons": "",
    "total_lbs": "400",
  }];

  inbound_form = [{
    "name": "Generator's Name",
    "type": "text",
    "rule": "required",
    "value": ""
  }, {
    "name": "EPA ID Number",
    "type": "text",
    "rule": "required",
    "value": ""
  }, {
    "name": "Manifest Number",
    "type": "text",
    "rule": "required",
    "value": ""
  }, {
    "name": "Profile Number",
    "type": "number",
    "rule": "required",
    "value": ""
  }, {
    "name": "Waste Type",
    "type": "text",
    "rule": "required",
    "value": ""
  },
  {
    "name": "Number of Containers",
    "type": "number",
    "rule": "required",
    "value": ""
  },
  {
    "name": "Type",
    "type": "select",
    "rule": "required",
    "value": ["DM", "BA", "CM"]
  },
  {
    "name": "Total Gallons",
    "type": "number",
    "rule": "required",
    "value": ""
  },
  {
    "name": "Total Lbs",
    "type": "number",
    "rule": "required",
    "value": ""
  }
  ];
  constructor() { }
}
