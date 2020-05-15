import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string;
  clave:string

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  doLogin(){

    console.log('doing login');

    // var request = {

    // }
    // this.loginService.login(request).subscribe(respuesta =>{
    //   console.log('esta es la respuesta del servidor',respuesta);
    // })


  }

}
