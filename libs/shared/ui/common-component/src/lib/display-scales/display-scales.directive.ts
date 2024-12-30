import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[btLibsUiDisplayScales]',
})
export class DisplayScalesDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
