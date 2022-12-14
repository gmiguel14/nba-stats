import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

@State({
  name: 'stats',
  defaults: {
    teste: ''
  }
})

@Injectable()
export class StatsState{
  
}