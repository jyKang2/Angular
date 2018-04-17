import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import {ApiModule} from './api/api.module';

@NgModule({
  imports: [
    HttpClientModule,
    ApiModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [
    
  ],
  declarations: [],
  entryComponents: [],
  providers: [

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) { }
}
