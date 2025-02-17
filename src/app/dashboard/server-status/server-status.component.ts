import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus = 'online';
  private interval?: ReturnType<typeof setInterval>
  

  ngOnInit() {
    console.log('ngOnInit');
    this.interval = setInterval(() => {
      const rnd = 100 * Math.random();
      if (rnd < 33) {
        this.currentStatus = 'online';
      } else if (rnd < 66) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
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
