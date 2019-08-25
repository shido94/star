import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable()
export class AlertService {

  constructor(private snackbar: MatSnackBar) {
  }

  success(message: string, duration: number = 2000) {
    const config = new MatSnackBarConfig();
    config.duration = duration;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    // config.extraClasses = ['alert', 'success'];

    this.snackbar.open(message, null, config);
  }

  error(message: string, duration: number = 3000) {
    const config = new MatSnackBarConfig();
    config.duration = duration;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    // config.extraClasses = ['alert', 'error'];

    this.snackbar.open(message, null, config);
  }
}
