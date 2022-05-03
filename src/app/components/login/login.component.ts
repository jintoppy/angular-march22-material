import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl()
  }) 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(inputValue:string){
    console.log(inputValue);
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

}
