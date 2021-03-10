import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NgbCalendar, NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AllBills } from 'src/app/core/mockUp/all-bills';

@Component({
  selector: 'app-manage-bills',
  templateUrl: './manage-bills.component.html',
  styleUrls: ['./manage-bills.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ManageBillsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  currentDate: any;
  model: NgbDateStruct | undefined;
  date = {year: Number, month: Number};
  Key = {
    PageUp: 'PageUp',
    PageDown: 'PageDown',
    End: 'End',
    Home: 'Home'
  };

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  allBillsList = AllBills;
  allBillsTemp = [];
  data : string[] = [];
  table_row_detail: any;

  constructor( private calendar: NgbCalendar,
    private dialogService: NbDialogService,
    ) {}

  ngOnInit(): void {
    const date = new Date().toDateString();
    this.currentDate = date;
    console.log(this.allBillsList);
  }

  selectToday() {
    this.model = this.calendar.getToday();
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
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      // console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);

    this.table_row_detail = row;
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }

  openDialodDetail(dataDetail: TemplateRef<any>) {
    this.dialogService.open(dataDetail)
      .onClose.subscribe((data: string) => data && this.data.push(data));
}



}
