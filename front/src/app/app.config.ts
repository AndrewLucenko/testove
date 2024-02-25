import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(CommonModule, HttpClientModule), provideRouter(routes), provideAnimationsAsync()],
};
