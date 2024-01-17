import { Component } from '@angular/core';
import { ProgramService } from 'src/app/Service/program.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  data:any;
  title:any;

  constructor(private programService:ProgramService, private router:Router){

  }
  ngOnInit(){
    
  }
  getProgram(){
  
    const search = this.programService.getSearchProgramName({search_program:this.title}).then(response=>{
      this.data = response;
      console.log(this.data);
    });
  }
  getProgramDetail(result:any){
    console.log(result);
    const navigationExtras:NavigationExtras = {
      queryParams:{
        result:JSON.stringify(result)
      }
    }
    this.router.navigate(['programDetail'],navigationExtras);
  }

}
