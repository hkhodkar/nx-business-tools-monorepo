import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicControl } from './dynamic-control.interfaces';

@Component({
  selector: 'bt-libs-ui-dynamic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnChanges {
  @Input() formModelConfig: DynamicControl[] = [];
  @Output() outputForm = new EventEmitter();

  formModel = new FormGroup({});

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formModelConfig']) {
      this.formModel = new FormGroup({});
      this.formModelConfig.forEach((control) => {
        this.formModel.addControl(
          control.controlKey,
          new FormControl(control.defaultValue, {
            updateOn: control.updateOn,
            validators: control.validators,
          })
        );
      });
    }
  }

  onSubmit() {
    this.outputForm.emit(structuredClone(this.formModel.value));
    this.formModel.reset();
  }
}
