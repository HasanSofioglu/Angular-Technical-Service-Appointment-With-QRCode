import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from './user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  model:User = new User();
  constructor(private accountService:AccountService,
              private router:Router,
              private myAlertifyService: AlertifyService) { }
  
  ngOnInit(): void {
    
  }

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logout();
    this.router.navigate(["worker"]);
  }
  login(){
    if(this.accountService.login(this.model))
    {
      this.myAlertifyService.success("Başarıyla giriş gerçekleşti Sayın "+localStorage.getItem("isLogged"))
      this.router.navigate(["worker"]);
    }
    else{
      this.myAlertifyService.error("Hatalı Giriş")
    }

   
  }
}
