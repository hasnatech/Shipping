import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.scss']
})
export class OutboundComponent implements OnInit {

  constructor(private service: CommonService) { }

  data;
  formValue;
  ngOnInit() {
    this.data = this.service.getInbounds();
    this.formValue = this.service.inbound_form;
  }


}
