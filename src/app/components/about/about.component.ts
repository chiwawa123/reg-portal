import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';

  constructor() { }

  ngOnInit(): void { }
}
