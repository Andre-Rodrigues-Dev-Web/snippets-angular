import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exemplo-status-code';

  testeUrl(){
   this.http.get(
    '${this.baseUrl}users/activate?mailToken=${mailToken}',
    {observe: 'response'}
   ).subscribe(response => {}, error => {
        // You can access status:
        console.log(error.status);
  });
  }
}
