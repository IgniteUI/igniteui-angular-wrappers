import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/samples/igGrid-AoT/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);