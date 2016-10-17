import { Component, OnInit } from '@angular/core';
import { CodeapiService } from './../codeapi.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html'
})
export class ShowDataComponent implements OnInit {

  dataEircode: any;
  dataUkcode: any;

  eircode: string;
  ukcode: string;
  
  hostname: string;

  constructor(private codeapiService: CodeapiService) { }

  ngOnInit() {
    this.eircode = '1234';
    this.ukcode = 'NR147PZ';
    this.hostname = 'localhost:8080';
  }


  getAddressByEircode(hostname: string, eircode: string) { 
    this.codeapiService.getAddressByEircode(hostname,eircode)
            .subscribe(
              data => this.dataEircode = data,
              error => console.error('Error: ' + error),
              () => console.log('Completed!')
            )
  }

  getAddressByUkcode(hostname: string, ukcode: string) { 
    this.codeapiService.getAddressByUkcode(hostname,ukcode)
            .subscribe(
              data => this.dataUkcode = data,
              error => console.error('Error: ' + error),
              () => console.log('Completed!')
            )
  }


}
