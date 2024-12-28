import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'business-tools-monorepo-expenses-overview-page',
    imports: [CommonModule, RouterModule],
    templateUrl: './expenses-overview-page.component.html',
    styleUrl: './expenses-overview-page.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesOverviewPageComponent {}
