import { Component, OnInit} from '@angular/core';

import { JFrameworksService } from './shared/jsframeworks.service';

@Component({
    moduleId: module.id,
    selector: 'jfs-framework-list',
    styles:[`
        .card{
            height:120px;
        }
    `],
    template: `
    <section>
        <div class="card-panel">
            <h5>List Of Collections</h5>


            <ul class="collection">
                <li class="collection-item avatar" *ngFor="let framework of frameworks;let i=index" >
                    <img src="http://kharkivjs.org/img/logo.png" alt="" class="circle">
                    <span class="title">{{framework.title}}</span>
                    <p>
                        {{framework.description}}
                    </p>
                    <span><a [href]="framework.url">{{framework.url}}</a></span>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
            </ul>


<mc-collapsible>
    <mc-collapsible-item  *ngFor="let framework of frameworks;let i=index">
        <mc-collapsible-header>
            <i class="material-icons">filter_drama</i>{{framework.title}}
        </mc-collapsible-header>
        <mc-collapsible-body>
            <p>{{framework.description}}</p>
        </mc-collapsible-body>
    </mc-collapsible-item>
    
</mc-collapsible>

        </div>
    </section>

    `
})
export class JFSFrameworkListComponent implements OnInit { 
    constructor(private jframeworksService:JFrameworksService){}
    ngOnInit(){
        this.jframeworksService.getJFrameworks().subscribe(response=>this.frameworks = response.json());
    }
    frameworks:any = [];

}
