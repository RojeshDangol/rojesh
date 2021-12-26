import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../../services/notes.service';
import { Material } from '../../../modules/material.module';
import { Notes } from '../../../services/notes';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder,
              private note: NotesService,
              private dialog: MatDialog) {}

  form!: FormGroup;
  titleLength:number = 0; //to check if form is filled
  noteLength:number = 0;

  // notes$:any =  new BehaviorSubject([]);
  notes:any =  [];

  data: any;
  currentId: any;
  currentClick!: boolean;
  currentNote: Array<any> = [];
  dataSubscription!: Subscription;
  idSubscription!: Subscription;
  noteSubscription!: Subscription;
  clickSubscription!: Subscription;



  

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control(''),
      note: this.fb.control('')
    })
    if(this.currentClick === false || this.currentClick === undefined){
      this.getNote();
    }
    
    this.dataSubscription = this.note.currentData.subscribe((data: any) => this.data = data);
    this.idSubscription = this.note.currentId.subscribe((data: any) => this.currentId = data);
    this.noteSubscription = this.note.currentNote.subscribe((id:any)=>this.currentNote = id);
    this.clickSubscription = this.note.click.subscribe((click: any)=> {
            this.currentClick = click;
            console.log("subclick", click)
          if(click === true){
            this.getNote();
            console.log("subclick", click)
            this.note.changeClick();
            console.log("subclick", click)
    }
  });
  
  }



  getNote(){
    this.note.getNote().subscribe((data: any) =>{
      console.log("Current Note", this.currentNote)
      this.notes = data;
      this.note.changeNote(this.notes);
      if(this.notes.length == 0 ){
        console.log("No Notes")
      }else{
        console.log(this.notes);
      }
      
    });
  }
  
  onSubmit(data: any){
  }

  openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; //click outside the window wont close
    dialogConfig.autoFocus = true; //will focus of first element
    dialogConfig.width = "60%";
    dialogConfig.data = {
      name: "Create",
      actionButtonText: "Create"
    }
    const dialogRef = this.dialog.open(NotesFormComponent, dialogConfig);
    //to pass the value of data to note-form
    this.data = dialogConfig.data.name;
    this.note.changeData(this.data);
    console.log(this.data)

  }
  
  openUpdateDialog(editNoteObj: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; //click outside the window wont close
    dialogConfig.autoFocus = true; //will focus of first element
    dialogConfig.width = "60%";
    dialogConfig.data = {
      name: "Update",
      actionButtonText: "Update"
    }
    const dialogRef = this.dialog.open(NotesFormComponent, dialogConfig);
    //to pass the value of data to note-form
    this.data = dialogConfig.data.name;
    this.note.changeData(this.data);
    // console.log(id);
    this.currentId = editNoteObj._id;
    this.note.changeId(this.currentId);
    console.log("current id", this.currentId);
    console.log("Obj", editNoteObj)
    this.note.changeNote({title: editNoteObj.title, note: editNoteObj.note});

  }

//Create function is in note-form
  // createNote(data:any){
  //   return this.note.createNote(data).subscribe(
  //     (res: any)=>{
  //       console.log("response", res);
  //     },
  //     (err: { error: any; })=>{
  //      console.log(err.error);
  //     }
  //   )
  // }

  //No Need
  // addNote(data: any){
  //   console.log(data);
  //   return this.note.addNote(data).subscribe(
  //     (res: any)=>{
  //       console.log("response", res);
  //     },
  //     (err: { error: any; })=>{
  //      alert(err.error);
  //     }
  //   )
  // }



  confirmDelete(data: any){
    if(confirm("Are"+data)){
      this.deleteNote(data);
    }
    this.getNote();
  }

  deleteNote(data: any){
    console.log("delete ", data);
    var id= {
      "_id": data
    };
    console.log(id)
    this.note.deleteNote(id).subscribe(
      (res: any)=>{ console.log("deleted", res);},
      (err: any)=>{ console.log(err)})
    
  }

  //Dialog box for form




  //Check if form is empty
  userInputTitle(data: number){
    this.titleLength = data;
  }
  userInputNote(data: number){
    this.noteLength = data;
  }

  checkForm(){
    if(this.titleLength === 0 ||
      this.noteLength === 0 )
      {
        return true;
      }else{
        return false;
      }
    }


ngOnDestroy(){
  this.dataSubscription.unsubscribe();
  this.idSubscription.unsubscribe();
  this.noteSubscription.unsubscribe();
  this.clickSubscription.unsubscribe();
}

}
