import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerDetails } from '../server-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  
  constructor(private http:HttpClient) { }

  getSearchProgramName(data:any){
    const response = new Promise(resolve =>{
      this.http.post(ServerDetails.serverIP + '/search_program',data).subscribe(data=>{
        resolve(data);
      }, err =>{
        console.log(err)
      })
    })
    return response;

  }
}
