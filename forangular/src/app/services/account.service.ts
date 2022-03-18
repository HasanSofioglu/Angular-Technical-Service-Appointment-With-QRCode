import { Injectable } from '@angular/core';
import { User } from '../loginpage/user';


@Injectable({
  providedIn:'root'
})

export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user:User):boolean
  {
    if(user.userName=="inci" && user.password=="12345")
    {
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
