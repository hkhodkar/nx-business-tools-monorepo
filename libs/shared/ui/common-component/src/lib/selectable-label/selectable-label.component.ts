import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectedAnimation } from '@bt-libs/shared/ui/utils';

@Component({
  selector: 'bt-libs-ui-selectable-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectable-label.component.html',
  styleUrl: './selectable-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [selectedAnimation() ]
})
export class SelectableLabelComponent {
  animationState = 'deselected';
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() labelText!: string;
  private _selected = false;

  @Input()
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.animationState = selected ? 'selected' : 'deselected';
  }
  onSelectionChanged() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
