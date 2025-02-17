import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host:{
    '(click)': 'onClick()'
  }
})
export class ButtonComponent {
  
  constructor(private el:ElementRef){}

  onClick(){
    console.log('Button component host', this.el)
  }
  

  
}
