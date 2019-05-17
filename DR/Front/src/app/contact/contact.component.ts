import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators, Form, FormGroup, EmailValidator} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  form = new FormGroup({
    email: this.email,
    message: this.message,
  })

  getErrorMessage(){
    return this.email.hasError('required')? 'You must enter an Email':
      this.email.hasError('email')? 'This is not a valid email':
      '';
  }

  getErrorMessage2(){
    return this.message.hasError('required')? 'You must enter a message':
      "";
  }


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  sendmail(form: Form){
    
    return this.http.post('api/contact', form).subscribe()
  }
  
}
