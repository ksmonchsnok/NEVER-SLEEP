import { Injectable, TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { WorkItems } from 'src/app/core/mockUp/work-items';

// import {NgbDatepicker, NgbDatepickerKeyboardService, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
@Injectable()
export class HomePageComponent implements OnInit {
  WorkItems = WorkItems;
  data: any = {};
  workName: string[] = [];
  currentDate: any;
  Key = {
    PageUp: 'PageUp',
    PageDown: 'PageDown',
    End: 'End',
    Home: 'Home'
  };

  constructor(
    private dialogService: NbDialogService
  ) { }

    ngOnInit(): void {
      let date = new Date().toDateString();
      this.currentDate = date;
    }

  openAddWorkDialog(addWorkItems: TemplateRef<any>) {
      this.dialogService.open(addWorkItems)
        .onClose.subscribe(workName => workName && this.workName.push(workName));
  }

  // processKey(event: KeyboardEvent, dp: NgbDatepicker) {
  //   const state = dp.state;
  //   switch (event.code) {
  //     case this.Key.PageUp:
  //       dp.focusDate(dp.calendar.getPrev(state.focusedDate, event.altKey ? 'y' : 'm'));
  //       break;
  //     case this.Key.PageDown:
  //       dp.focusDate(dp.calendar.getNext(state.focusedDate, event.altKey ? 'y' : 'm'));
  //       break;
  //     case this.Key.End:
  //       dp.focusDate(event.altKey ? state.maxDate : state.lastDate);
  //       break;
  //     case this.Key.Home:
  //       dp.focusDate(event.altKey ? state.minDate : state.firstDate);
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  //   event.stopPropagation();
  // }

}


// @Component({
//   selector: 'ngbd-datepicker-keyboard',
//   templateUrl: './datepicker-keyboard.html',
//   providers: [{provide: NgbDatepickerKeyboardService, useClass: HomePageComponent}]
// })
// export class NgbdDatepickerKeyboard {
//   model: NgbDateStruct | undefined;
// }