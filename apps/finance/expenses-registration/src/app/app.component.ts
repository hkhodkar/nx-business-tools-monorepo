import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@bt-libs/shared/ui/common-component';
import { NavbarItem } from '@bt-libs/shared/ui/models';

@Component({
    imports: [RouterModule, NavbarComponent],
    selector: 'business-tools-monorepo-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finance-expenses-registration';

  navItems: NavbarItem[] = [
    { label: 'expensesapproval', route: '/expenses-approval' },
  ];
}
