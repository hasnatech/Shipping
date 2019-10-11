import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.scss']
})
export class InboundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [{
    "name": "World Oil Environmental Services",
    "epa_id_number": "CAD028277036",
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
  }]


  formValue = [{
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
}
