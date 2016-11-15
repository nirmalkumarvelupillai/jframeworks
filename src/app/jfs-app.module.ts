import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { JFSAppComponent } from './jfs-app.component';
import { JFSFrameworkListComponent } from './jfs-framework-list.component';
import { JFSFrameworkViewComponent } from './jfs-framework-view.component';
import { JFSFrameworkNewComponent } from './jfs-framework-new.component';

import { MCCollapsibleComponent } from './materializecss/mc-collapsible.component';
import { MCCollapsibleHeaderDirective } from './materializecss/mc-collapsible.component';
import { MCCollapsibleBodyDirective } from './materializecss/mc-collapsible.component';
import { MCCollapsibleItemDirective } from './materializecss/mc-collapsible.component';

import { JFrameworksService } from './shared/jsframeworks.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        MCCollapsibleComponent,
        MCCollapsibleHeaderDirective,
        MCCollapsibleBodyDirective,
        MCCollapsibleItemDirective,

        JFSAppComponent,
        JFSFrameworkListComponent,
        JFSFrameworkViewComponent,
        JFSFrameworkNewComponent
    ],
    providers: [
        JFrameworksService
    ],
    bootstrap: [JFSAppComponent],
})
export class JFSAppModule { }
