import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CredentialModel } from './credential.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  userCredential = new CredentialModel(null,null);
  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

signup(){
  console.log("Creating a Signup Account");
  this.usersService.signup(this.userCredential);
  console.log("Created a Signup Account");
  this.router.navigate(['/login']);
}

}
