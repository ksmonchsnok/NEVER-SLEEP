import { Injectable, TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { WorkItems } from 'src/app/core/mockUp/work-items';

import {NgbCalendar, NgbDatepicker, NgbDatepickerKeyboardService, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

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
  model: NgbDateStruct | undefined;
  date = {year: Number, month: Number};
  Key = {
    PageUp: 'PageUp',
    PageDown: 'PageDown',
    End: 'End',
    Home: 'Home'
  };

  constructor(
    private dialogService: NbDialogService,
    private NgbDatepickerKeyboardService: NgbDatepickerKeyboardService,
    private calendar: NgbCalendar
  ) { }

    ngOnInit(): void {
      let date = new Date().toDateString();
      this.currentDate = date;
    }

  openAddWorkDialog(addWorkItems: TemplateRef<any>) {
      this.dialogService.open(addWorkItems)
        .onClose.subscribe(workName => workName && this.workName.push(workName));
  }


  selectToday() {
    this.model = this.calendar.getToday();
    console.log('Today :',this.model);
    
  }  
  processKey(event: KeyboardEvent, dp: NgbDatepicker) {
    const state = dp.state;
    switch (event.code) {
      case this.Key.PageUp:
        dp.focusDate(dp.calendar.getPrev(state.focusedDate, event.altKey ? 'y' : 'm'));
        break;
      case this.Key.PageDown:
        dp.focusDate(dp.calendar.getNext(state.focusedDate, event.altKey ? 'y' : 'm'));
        break;
      case this.Key.End:
        dp.focusDate(event.altKey ? state.maxDate : state.lastDate);
        break;
      case this.Key.Home:
        dp.focusDate(event.altKey ? state.minDate : state.firstDate);
        break;
      default:
        // super.processKey(event, dp);
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }

}