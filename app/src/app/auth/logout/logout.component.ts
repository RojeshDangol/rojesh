import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.auth.logOut();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['home']);
    }, 2000); 
  }


}
