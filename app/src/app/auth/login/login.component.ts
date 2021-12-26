import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private fb: FormBuilder, 
              private auth: AuthService, 
              private router: Router,
              private spinnerLogout: NgxSpinnerService
              ) { }

  form!: FormGroup;
  usernameLength:number = 0; //to check if form is filled
  passwordLength:number = 0;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    })
  }

  onSubmit(data: any){
    return this.auth.loginUser(data).subscribe(
      (res: { token: string; })=>{
        this.spinnerLogout.show();
        setTimeout(()=>{
          localStorage.setItem('token', res.token);
          this.spinnerLogout.hide();
          this.router.navigate(['/profile']);
        }, 2000);
      },
      (err: { error: any; })=>{
        alert(err.error);
      }
    )
  }

  userInputUsername(data: number){
    this.usernameLength = data;
  }
  userInputPassword(data: number){
    this.passwordLength = data;
  }

  checkForm(){
    if(this.usernameLength === 0 ||
      this.passwordLength === 0 )
      {
        return true;
      }else{
        return false;
      }
    }

    

}
