import { Injectable } from '@angular/core';
import {
  NbToastrConfig,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  private configSuccess: Partial<NbToastrConfig> = {
    position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    status: 'success',
    icon: 'checkmark-circle-2-outline',
    duration: 4000,
    preventDuplicates: true,
  };
  private configError: Partial<NbToastrConfig> = {
    position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    status: 'danger',
    icon: 'alert-circle-outline',
    duration: 4000,
    preventDuplicates: true,
  };

  constructor(private nbToastrService: NbToastrService) {}

  success(message?: string) {
    this.nbToastrService.show(message, 'Success!', this.configSuccess);
  }

  error(message?: string) {
    this.nbToastrService.show(message, 'Error!', this.configError);
  }
}
