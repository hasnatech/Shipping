import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  product;
  code;
  goto;
  constructor(private route: ActivatedRoute, private service: CommonService) {
    this.route.queryParams.subscribe(data => {
      this.code = data.code;
      this.goto = data.goto;
      console.log(this.code, this.goto);
      this.product =this.service.getProduct(this.code);
    })
  }

  ngOnInit() {

  }

}
