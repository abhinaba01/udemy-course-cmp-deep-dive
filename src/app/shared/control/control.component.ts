import {
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  constructor(private el: ElementRef) {}
  @ContentChild('input') inputControl?: ElementRef<HTMLInputElement>

  onClick() {
    console.log('Content',this.inputControl)
    
  }
}
