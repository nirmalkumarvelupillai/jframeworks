import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { JFSAppComponent } from './jfs-app.component';
import { JFSFrameworkListComponent } from './jfs-framework-list.component';
import { JFSFrameworkViewComponent } from './jfs-framework-view.component';
import { JFSFrameworkNewComponent } from './jfs-framework-new.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        JFSAppComponent,
        JFSFrameworkListComponent,
        JFSFrameworkViewComponent,
        JFSFrameworkNewComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [JFSAppComponent],
})
export class JFSAppModule { }
