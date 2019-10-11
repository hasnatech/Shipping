import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.scss']
})
export class InboundComponent implements OnInit {

  constructor(private service:CommonService) { }

  data;
  formValue;
  ngOnInit() {
    this.data = this.service.getInbounds();
    this.formValue = this.service.inbound_form;
  }

  
}
