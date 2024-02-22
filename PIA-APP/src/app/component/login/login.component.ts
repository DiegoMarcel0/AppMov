import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/class/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
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
