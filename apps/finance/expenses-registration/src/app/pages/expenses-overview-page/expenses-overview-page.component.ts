import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ClockWidgetComponent,
  DisplayScalesComponent,
  DisplayScalesDirective,
  ModalComponent,
  WeatherWidgetComponent,
  widget,
  WidgetContainerComponent,
} from '@bt-libs/shared/ui/common-component';
import {
  AddExpense,
  AddExpenseTemplateDrivenFormComponent,
} from '@bt-libs/finance/ui/expenses-registration-forms';

@Component({
  selector: 'business-tools-monorepo-expenses-overview-page',
  imports: [
    CommonModule,
    RouterModule,
    ModalComponent,
    AddExpenseTemplateDrivenFormComponent,
    DisplayScalesComponent,
    DisplayScalesDirective,
    WidgetContainerComponent,
  ],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesOverviewPageComponent implements OnInit {
  addExpense(formData: AddExpense) {
    console.log(formData);
  }
  addExpenseShown = false;
  activeWidget!: widget;
  protected readonly cd = inject(ChangeDetectorRef);
  showWeather = true;
  ngOnInit() {
    setInterval(() => {
      this.activeWidget = {
        component: this.showWeather
          ? WeatherWidgetComponent
          : ClockWidgetComponent,
          injector: null
      };
      this.showWeather = !this.showWeather;
      this.cd.detectChanges();
    }, 5000);
  }
}
