import { Component, OnInit } from '@angular/core';
import Quagga from 'quagga';
import { CommonService } from 'src/app/service/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  constructor(private service:CommonService, private router:Router, private route: ActivatedRoute) {
    
   }
  output = "Scanning...";
  page_name;
  ngOnInit() {

    this.route.params
      .subscribe(data => {
        this.page_name = data.page_name;
      });
    var ths = this;
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#barcode')    // Or '#yourElement' (optional)
      },
      decoder: {
        readers: ["code_128_reader", "ean_reader"]
        //,"ean_reader", "ean_8_reader", "code_39_reader","code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader", "2of5_reader", "code_93_reader"] 
      }
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });

    var last_code_arr = [];
    Quagga.onDetected(function (result) {
      var last_code = result.codeResult.code;
      last_code_arr.push(last_code);
      console.log(last_code);
      if (last_code_arr.length > 20) {
        var code = ths.order_by_occurrence(last_code_arr)[0];
        last_code_arr = [];
        ths.output = "Code Detected: " + code;
        Quagga.stop();
        ths.service.setBarCode(code);
        ths.router.navigate(["/product"], {queryParams : {code: code, goto:ths.page_name}});
      }
    })
  }

  order_by_occurrence(arr) {
    console.log(arr);
    var counts = {};
    arr.forEach(function (value) {
      if (!counts[value]) {
        counts[value] = 0;
      }
      counts[value]++;
    });
    return Object.keys(counts).sort(function(curKey, nextKey){
      if(counts[curKey] < counts[nextKey])
        return counts[curKey];
    })
  }

}
