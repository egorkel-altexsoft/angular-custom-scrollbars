import { ApplicationConfig } from '@angular/core';
import { provideScrollbarOptions } from 'ngx-scrollbar';

export const appConfig: ApplicationConfig = {
  providers: [provideScrollbarOptions({
    appearance: 'compact'
  })]
};
