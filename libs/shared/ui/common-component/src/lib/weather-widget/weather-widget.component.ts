import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-ui-weather-widget',
  imports: [CommonModule],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWidgetComponent {}
