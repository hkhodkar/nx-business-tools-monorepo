import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxWordCountValidator(
  count: number
): ValidatorFn | null  {
  return (control:AbstractControl) => {
    if (control?.value?.split(' ').length >= count) {
      return { maxWordCountValidator: { count } };
    }
    return null;
  }
}
