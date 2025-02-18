import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus = signal<'online'|'offline'| 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>


  constructor(){
    effect(()=>{
      console.log(this.currentStatus())
    })
  }
  

  ngOnInit() {
    console.log('ngOnInit');
    this.interval = setInterval(() => {
      const rnd = 100 * Math.random();
      if (rnd < 33) {
        this.currentStatus.set('online');
      } else if (rnd < 66) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 1000);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    clearTimeout(this.interval);
  }
}
