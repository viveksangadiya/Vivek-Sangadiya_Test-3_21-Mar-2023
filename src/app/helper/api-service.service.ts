import { Injectable } from '@angular/core';
import { Program } from '../model/Program';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/Api-response';
 @Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  resultProgram= new BehaviorSubject<Program[]>([]);


  getProgramData():Observable<Program[]>{
    return this.http.get<{programs : Program[]}>("http://cmi-ofm-qa.azurewebsites.net/api/Program").pipe(map((res:any) => res.programs))
  }

  addProgram(program: Program): Observable<ApiResponse<Program[]>> {
    const formData = new FormData();
    Object.keys(program).forEach((key) =>
      formData.append(key, (program as any)[key])
    );
    return this.http
      .post<ApiResponse<Program[]>>("http://cmi-ofm-qa.azurewebsites.net/api/Program", formData)
      .pipe(
        map((res) => {
          if (res.success) {
            this.resultProgram.next([...this.resultProgram.getValue(), program]);
          } 
          return res;
        }));
  }

  editProgram(program: Program): Observable<ApiResponse<Program[]>> {
    const formData = new FormData();
    Object.keys(program).forEach((key) =>
      formData.append(key, (program as any)[key])
    );
    return this.http
      .put<ApiResponse<Program[]>>("http://cmi-ofm-qa.azurewebsites.net/api/program", formData)
      .pipe(
        map((res) => {
          if (res.success) {
            this.resultProgram.next(
              this.resultProgram.getValue().reduce((d: Program[], ac) => {
                if (ac.programID === program.programID) {
                  ac = program;
                }
                d.push(ac);
                return d;
              }, [])
            );
          } 
          return res;
        })
      );
  }

  isActiveData(programId: string): Observable<ApiResponse<Program[]>> {
    const formData = new FormData();
    formData.append('programID', programId);
    return this.http
      .put<ApiResponse<Program[]>>(
        `http://cmi-ofm-qa.azurewebsites.net/api/program/${programId}/activate`,
        formData
      )
      .pipe(
        map((res) => {
          if (res.success) {
            this.resultProgram.next(
              this.resultProgram.getValue().reduce((d: Program[], ac) => {
                if (ac.programID === programId) {
                  ac.isActive = true;
                  res.programs = [ac];
                }
                d.push(ac);
                return d;
              }, [])
            );
          } else {
          }
          return res;
        })
      );
  }

  isDeactiveData(programId: string): Observable<ApiResponse<Program[]>> {
    return this.http
      .delete<ApiResponse<Program[]>>(
        `http://cmi-ofm-qa.azurewebsites.net/api/program/${programId}`
      )
      .pipe(
        map((res) => {
          if (res.success) {
            this.resultProgram.next(
              this.resultProgram.getValue().reduce((d: Program[], ac) => {
                if (ac.programID === programId) {
                  ac.isActive = false;
                  res.programs = [ac];
                }
                d.push(ac);
                return d;
              }, [])
            );}
            else {
          }
          return res;
        })
      );
  }
}
