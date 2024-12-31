import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { appConfig } from './app/app.config';

// import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

/** Modular project */
platformBrowserDynamic().bootstrapModule( AppModule );

/** Standalone project */
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

