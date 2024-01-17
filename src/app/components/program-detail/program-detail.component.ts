import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  itemDetail:any = [];

  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe((response)=>{
     const paramsData = JSON.parse(response['result']);
     this.itemDetail=paramsData;
    });
  }

  ngOnInit(): void {
      
  }



}
