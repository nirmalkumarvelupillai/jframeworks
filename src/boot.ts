import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { JFSAppModule } from './app/jfs-app.module';

platformBrowserDynamic().bootstrapModule(JFSAppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
;
