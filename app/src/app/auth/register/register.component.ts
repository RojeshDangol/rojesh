import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private auth: AuthService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  form!: FormGroup;
  firstLength:number = 0; //to check the length of input
  lastLength:number = 0;
  usernameLength: number = 0;
  passwordLength: number = 0;
  show: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control('')
    })
  }

  onSubmit(data: any){
    this.registerUser(data);
  }

  registerUser(data: any){
    this.auth.registerUser(data).subscribe(
      (res: any)=>{
        //then login
         this.auth.loginUser(data).subscribe(
           (res: { token: string; })=>{
             this.spinner.show();
             setTimeout(() => {
              localStorage.setItem('token', res.token);
              this.spinner.hide();
              this.router.navigate(['/profile']);
             }, 3000);
          },
           (err: any)=>{console.log(err)}
          );
        },
      (err: { error: any; })=>{alert(err.error)}
    );
     
    
  }

  loginUser(data:any){
    this.auth.loginUser(data).subscribe(
      (res: { token: string; })=>{
            localStorage.setItem('token', res.token);
            },
      (err: any)=>{console.log(err)}
          );
    
  }

  userInputFirst(data: number){
    this.firstLength = data;
  }
  userInputLast(data: number){
    this.lastLength = data;
  }
  userInputUsername(data: number){
    this.usernameLength = data;
  }
  userInputPassword(data: number){
    this.passwordLength = data;
  }


  checkForm(){
    if(this.firstLength === 0 || 
      this.lastLength === 0 || 
      this.usernameLength === 0 ||
      this.passwordLength === 0 )
      {
        return true;
      }else{
        return false;
        
      }
  }

}
