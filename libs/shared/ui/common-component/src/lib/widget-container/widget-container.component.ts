import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { widget } from './widget.interface';

@Component({
  selector: 'bt-libs-ui-widget-container',
  imports: [CommonModule],
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetContainerComponent {
  @Input() widget: widget = { component: null, injector:null };
}
