import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-post',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPostComponent implements OnInit{
  title:FormControl;
  body:FormControl;
  postForm:FormGroup;
  constructor(){

  }
  ngOnInit(){
    this.title=new FormControl('',Validators.required);
    this.body=new FormControl('',Validators.required);
    this.postForm=new FormGroup({
      title:this.title,
      body:this.body
    });
  }
  sendPost(data:any){
    console.log(data)

  }
}
