import { Injector, Type } from "@angular/core";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface widget { component: Type<any> | null; injector: Injector | any }
