import { Component } from '@angular/core';

@Component({
  selector: 'app-exersices-compoment',
  templateUrl: './exersices-compoment.component.html',
  styleUrl: './exersices-compoment.component.css'
})
export class ExersicesCompomentComponent  {
  username = "";
  userNameInInput = false;
  
  nameInInput() {
    if (this.username == ""){
     return this.userNameInInput= true;
     
    }this.resetInputButton ();
  }
  resetInputButton(){
    this.username ="";

  }

}
