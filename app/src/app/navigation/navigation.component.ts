import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationService } from '../services/navigation.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private auth: AuthService, 
              private nav: NavigationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loggedIn(){
    return this.auth.loggedIn();
  }

  redirect(){
    this.router.navigate(['home']);
  }

  ngAfterViewInit(): void{
    this.nav.setSideNav(this.sidenav);
  }





}
