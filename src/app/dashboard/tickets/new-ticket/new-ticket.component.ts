import { afterNextRender, afterRender, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add= new EventEmitter<{title:string; text:string}>();

  enteredTitle=''
  enteredText=''

  constructor(){
    // afterRender(()=>{
    //   console.log('afterRender')
    // })

    // afterNextRender(()=>{
    //   console.log('afterNextRender')
    // })
  }

  ngAfterViewInit() {
    // console.log('AFTER VIEW INIT');
    // console.log(this.form?.nativeElement);
  }

  ngOnInit() {
    // console.log('ON INIT');
    // console.log(this.form?.nativeElement);
  }


  onSubmit(){
    this.add.emit({title:this.enteredTitle, text: this.enteredText})
    this.enteredText=''
    this.enteredTitle=''
  }

  // onSubmit(title:string,ticketText:string){
  //    this.add.emit({title:title,text:ticketText})
  //    this.form?.nativeElement.reset();
  // }
  // onSubmit(titleElement: HTMLInputElement) {
  //   console.log(titleElement.value);
  //   console.dir('ViwChild', this.form?.nativeElement.reset());
  // }
}
