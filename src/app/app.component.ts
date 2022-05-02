import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { DialogComponent } from './components/dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'css-framework-app';
  constructor(private dialog: MatDialog, private bpObserver: BreakpointObserver){

  }

  ngOnInit(){
    this.bpObserver.observe(
      [
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ]
    )
    .subscribe((val: any) => {
      console.log(val);
    })
  }

  onClick(){
    this.dialog.open(DialogComponent, {      
       disableClose: true,
       data: {
        name: 'Angular Training'
      }
    });
  }
}
