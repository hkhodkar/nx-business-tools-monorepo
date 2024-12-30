import { ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayScalesDirective } from './display-scales.directive';

@Component({
  selector: 'bt-libs-ui-display-scales',
  imports: [CommonModule],
  templateUrl: './display-scales.component.html',
  styleUrl: './display-scales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayScalesComponent {
  @Input({ required: true }) scaleSizes!: number[];
  @ContentChild(DisplayScalesDirective) content!: DisplayScalesDirective;
}
