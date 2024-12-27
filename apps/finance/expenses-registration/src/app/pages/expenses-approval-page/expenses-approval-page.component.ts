import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '@bt-libs/shared/ui/common-directives';

@Component({
  selector: 'business-tools-monorepo-expenses-approval-page',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesApprovalPageComponent {}
