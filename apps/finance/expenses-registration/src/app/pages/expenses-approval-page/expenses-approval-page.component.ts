import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '@bt-libs/shared/ui/common-directives';
import { SelectableLabelComponent } from '@bt-libs/shared/ui/common-component';

@Component({
    selector: 'business-tools-monorepo-expenses-approval-page',
    imports: [CommonModule, HighlightDirective, SelectableLabelComponent],
    templateUrl: './expenses-approval-page.component.html',
    styleUrl: './expenses-approval-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesApprovalPageComponent {}
