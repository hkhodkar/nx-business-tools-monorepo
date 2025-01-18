import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseReactive } from '../add-expense.interface';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { maxWordCountValidator } from '@bt-libs/shared/util/form-validators';
import { debounceTime, of, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'bt-libs-ui-add-expense-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-expense-reactive-form.component.html',
  styleUrl: './add-expense-reactive-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseReactiveFormComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  disabledAddTagButton = signal(true);
  @ViewChildren('tags') tags!: QueryList<ElementRef<HTMLInputElement>>;

  @Input()
  public set expenseToAdd(value: AddExpenseReactive) {
    this.addExpenseForm.patchValue(value);

    this.addExpenseForm.controls.tags.clear();
    value.tags?.forEach((tag) => {
      this.addExpenseForm.controls.tags.push(new FormControl(tag));
    });
  }

  @Output() addExpense = new EventEmitter<AddExpenseReactive>();

  addExpenseForm = new FormGroup({
    description: new FormControl(
      '',
      Validators.compose([Validators.required, maxWordCountValidator(4)])
    ),
    amount: new FormGroup({
      amountExclVat: new FormControl<number | null>(null, [
        Validators.required,
      ]),
      vatPercentage: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    }),
    date: new FormControl(new Date().toISOString().split('T')[0], [Validators.required]),
    tags: new FormArray([new FormControl('', Validators.required)]),
  });

  ngOnInit(): void {
    this.addExpenseForm.valueChanges
    .pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      switchMap(formData =>  of(!!formData.tags && formData.tags.some(c => !c))),
    )
    .subscribe( (isAddTagsDisable) => this.disabledAddTagButton.set(isAddTagsDisable))
  }


  addTag() {
    if(this.addExpenseForm.controls.tags.controls.some(c => c.valid)){
      this.addExpenseForm.controls.tags.insert(0, new FormControl('', Validators.required));
      setTimeout(() => {
        this.tags.first.nativeElement.focus()
      })
    }
  }

  removeTag(index: number) {
    this.addExpenseForm.controls.tags.removeAt(index);
  }

  onSubmit() {
    this.addExpense.emit(
      structuredClone(this.addExpenseForm.value as AddExpenseReactive)
    );
    console.log(this.addExpenseForm.value);
    this.addExpenseForm.reset();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
