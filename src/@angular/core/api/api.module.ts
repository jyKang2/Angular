import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

@NgModule({
  imports: [],
  providers: [
      HeroService,
      MessageService
  ]
})
export class ApiModule {}
