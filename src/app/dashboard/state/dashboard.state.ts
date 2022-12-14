import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

@State({
  name: 'dashboard',
  defaults: {
    teste: ''
  }
})

@Injectable()
export class DashboardState{
  
}