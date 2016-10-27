import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { JFSAppComponent } from './jfs-app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [JFSAppComponent],
    providers: [/* TODO: Providers go here */],
    bootstrap: [JFSAppComponent],
})
export class JFSAppModule { }
