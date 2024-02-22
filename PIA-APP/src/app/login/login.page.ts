import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(
    private autSv:AuthService,
    private router:Router
  ) {
   }

  ngOnInit(){}
  async onLogin(){
    this.autSv.onLogin(this.user).then((user:any)=>{
      if(user!=null&&user.code==undefined){
        console.log('Inicio de sesion exitoso!');
        this.router.navigate(['/admin']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            console.log(user.code);
          }
        }
      }
    }).catch((error:any)=>{
      console.log(error);
    })
  }
}
