import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(public popoverController: PopoverController) { }

  private popover: Promise<HTMLIonPopoverElement> | null = null;  
  
  openPopover(ev: any) {
    if (!this.popover) {
      this.popover = this.popoverController.create({
        component: PopoverComponent,
        cssClass: 'my-custom-class',
        showBackdrop: false
      }).then((popover) => {
        this.popover = popover;
        this.popover.present();
      });
    }
  }

  closePopover() {
    if (this.popover) {
      this.popover.then((popover) => {
        popover.dismiss();
        this.popover = null;
      });
    }
  }



  

  ngOnInit() {
    
  }

}
