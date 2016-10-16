import { CodeapiService } from './codeapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: string;

  constructor(private codeapiService: CodeapiService) { }

  getAddressByEircode(eircode: string) { 

    this.codeapiService.getAddressByEircode(eircode)
            .subscribe(
              data => this.data = JSON.stringify(data),
              error => console.error('Error: ' + error),
              () => console.log('Completed!')
            )

  }

}
