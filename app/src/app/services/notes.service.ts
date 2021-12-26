import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment.prod';
import { environment } from '../../environments/environment.dev';
import { Notes } from './notes';
import { Observable, catchError, EMPTY, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {



  //shared data
  private dataSource = new BehaviorSubject('');
  currentData = this.dataSource.asObservable();

  private idSource = new BehaviorSubject('');
  currentId = this.idSource.asObservable();

  private clickSource = new BehaviorSubject<boolean>(false);
  click = this.clickSource.asObservable();

  private noteSource: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  currentNote = this.noteSource.asObservable();


  constructor(private http: HttpClient) { }
  //function to pass data between component
  changeData(data: any){
    this.dataSource.next(data);
  }
  changeId(data: any){
    this.idSource.next(data);
  }
  changeNote(data:any){
    this.noteSource.next(data);
  }
  changeClick(){
    this.clickSource.next(!this.clickSource.value);
  }


  createNote(data: any){
    let url = environment.BASE_URL+environment.Notes.create;
    return this.http.post<any>(url, data);
  }

  addNote(data: any){
    let url = environment.BASE_URL+environment.Notes.add;
    return this.http.put<any>(url, data);
  }

  getNote(): Observable<Notes[]>{
    let url = environment.BASE_URL+environment.Notes.get;
  
      return this.http.get<Notes[]>(url).pipe(
        catchError((err: any)=>{
          console.log('Notes database is not initialized yet');
          return EMPTY;
        })
      );
    
  }

  deleteNote(data: any){
    let url = environment.BASE_URL+environment.Notes.delete;
    return this.http.put<any>(url, data);
  }

  updateNote(data: any){
    let url = environment.BASE_URL+environment.Notes.update;
    return this.http.put<any>(url, data);
  }

  // updateTitle(data: any){
  //   let url = environment.BASE_URL+environment.Notes.upadateTitle;
  //   return this.http.put<any>(url, data);
  // }




}
