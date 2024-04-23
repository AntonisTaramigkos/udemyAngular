import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
pressMeCondition = true;
arrayOfClicks = [];

pressMe(){
  this.pressMeCondition = !this.pressMeCondition;
  this.arrayOfClicks.push(new Date())  
  }

}



