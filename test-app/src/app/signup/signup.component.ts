import { AuthService } from './../Services/auth.service';
import { TokenService } from './../Services/token.service';
import { JarwisService } from './../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email:null,
    name: null,
    password: null,
    password_confirmation:null
  }

  public errors = [];

  constructor(private Jarwis: JarwisService,
              private Token:TokenService,
              private router:Router,
              private Auth: AuthService
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error:any){
    this.errors = error.error.errors;
    
  }

}
