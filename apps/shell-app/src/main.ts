import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  const params = new URLSearchParams(location.search);
  if (params.get('debug') !== 'true') {
    window['__REDUX_DEVTOOLS_EXTENSION__'] = null;
  }

  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
