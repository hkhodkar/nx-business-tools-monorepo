import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from "@angular/animations";

export function selectedAnimation(): AnimationTriggerMetadata {
  return trigger('selectedState', [
  state("selected", style({ backgroundColor: "#fe9224", color: '#fff', borderColor: "#fe9224" })),
  state("deselected", style({ borderColor: "#455b66"})),
  transition("selected <=> deselected",[animate("300ms")]),])
  }
