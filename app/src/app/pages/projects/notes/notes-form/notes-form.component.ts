import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotesComponent } from '../notes.component';
import { NotesService } from '../../../../services/notes.service';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NotesComponent>,
              private noteService: NotesService
                  ) { }


  form!: FormGroup;
  titleLength:number = 0; //to check if form is filled
  noteLength:number = 0;

  // notes$:any =  new BehaviorSubject([]);
  notes:any =  [];
  formData: any;
  //shared data with NotesComponent
  data: any = '';
  currentId: any = '';
  currentClick!: boolean;
  currentNote!: {title: string, note: string};

  dataSubscription!: Subscription;
  idSubscription!: Subscription;
  noteSubscription!: Subscription;
  clickSubscription!: Subscription;



  ngOnInit(): void {
    this.form = this.fb.group({
      // _id: this.fb.control(''),
      title: this.fb.control(''), 
      note: this.fb.control('')
    })
    this.dataSubscription = this.noteService.currentData.subscribe((data:any)=>this.data = data);
    this.idSubscription = this.noteService.currentId.subscribe((id:any)=>this.currentId = id);
    this.noteSubscription = this.noteService.currentNote.subscribe((note:any)=>this.currentNote = note);
    this.clickSubscription = this.noteService.click.subscribe((click:any)=>this.currentClick = click);

    console.log(this.data);
    console.log(this.currentId)
    console.log(this.currentNote);
    console.log("curNote", this.currentNote);
    if(this.data === "Update"){
      this.form.setValue(this.currentNote);
    }
  }

  onSubmit(data: any){
   this.formData = data;
   this.noteService.changeClick();
        // console.log("note-form form",this.currentClick);
   this.submitFunction(this.formData);
   this.noteService.changeNote(this.formData);
        // console.log("note-form currclick", this.currentClick);
  this.noteService.changeClick();
  this.closeDialog();
   
  }

  createNote(data:any){
    return this.noteService.createNote(data).subscribe(
      (res: any)=>{
        console.log(res);
      },
      (err: { error: any; })=>{
       console.log(err.error);
      }
    )
  }

  updateNote(data: any){
    // console.log("data in up",data)
    // console.log("id", this.currentId);
    // console.log("data", this.data);
    var newData = {
      _id: this.currentId,
      title: data.title,
      note: data.note
    }
    return this.noteService.updateNote(newData).subscribe(
      (res: any)=>{
        console.log(res);
      },
      (err: { error: any; })=>{
       console.log(err.error);
      }
    )
  }

submitFunction(formData: any){
  if(this.data === "Create"){
    this.createNote(formData);
  }else if (this.data === "Update"){
    console.log("form data", formData);
    this.updateNote(formData);
  }
}


  closeDialog(){
    this.dialogRef.close();
  }

  userInputTitle(data: number){
    this.titleLength = data;
  }
  userInputNote(data: number){
    this.noteLength = data;
  }

  checkForm(){
    if(this.titleLength != 0 ||
      this.noteLength != 0 )
      {
        return false;
      }else{
        return true;
      }
    }

    ngOnDestroy(){
      this.dataSubscription.unsubscribe();
      this.idSubscription.unsubscribe();
      this.noteSubscription.unsubscribe();
      this.clickSubscription.unsubscribe();
    }

}
