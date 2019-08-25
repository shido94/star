import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

export class CustomValidators {

  static greaterLength(otherControl: AbstractControl): ValidatorFn {

    let valueChangeSubscription: Subscription;

    return (control: AbstractControl): ValidationErrors | null => {

      if (!valueChangeSubscription) {
        valueChangeSubscription = otherControl.valueChanges.subscribe(() => control.updateValueAndValidity());
      }
      if (!otherControl.value || (control.value && control.value.length > otherControl.value.length)) {
        return null;
      } else {
        return {error: 'length is shorted'};
      }
    };
  }
}
