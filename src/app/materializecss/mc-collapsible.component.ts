import { Component, Directive, ContentChildren, QueryList, AfterContentInit,
    trigger, state, animate, transition, style  } from '@angular/core';


@Directive({
    selector:'mc-collapsible-header'
})
export class MCCollapsibleHeaderDirective{
}

@Directive({
    selector:'mc-collapsible-body'
})
export class MCCollapsibleBodyDirective{
}

@Component({
    selector:'mc-collapsible-item',
    animations: [
      trigger('visibilityChanged', [
        state('shown' , style({opacity:1, visibility:'visible',height:'*'})),
        state('hidden', style({height:0, visibility:'hidden',opacity:0})),
        transition('shown => hidden', [
                                  animate(400, style({height: 0, opacity:0}))
                                ]),
        transition('hidden => shown', [
                                  animate(400, style({opacity:1, height: '*'}))
                                ])
      ])
    ],
    template:`
        <li class="collapsible-item" [class.active]="showCollapsibleBody">
            <div class="collapsible-header" [class.active]="showCollapsibleBody" (click)="_toggleCollapsibleBody($event)">
                <ng-content select="mc-collapsible-header"></ng-content>
            </div>
            <div class="collapsible-body" #viewBody [style.display]="showCollapsibleView" 
                (@visibilityChanged.start)="startViewCollapsible($event,viewBody)"
                (@visibilityChanged.done)="doneViewCollapsible($event,viewBody)"
                [@visibilityChanged]="collapsibleBodyVisibility" >
                <ng-content select="mc-collapsible-body"></ng-content>
            </div>
        </li>
    `


})
export class MCCollapsibleItemDirective{
    showCollapsibleBody:boolean = false;
    
//[style.display]="showCollapsibleBody ? 'block' : 'none'"
    get collapsibleBodyVisibility(){
        return this.showCollapsibleBody ? 'shown' : 'hidden';
    }
    _toggleCollapsibleBody($event){
        this.showCollapsibleBody = !this.showCollapsibleBody;
    }

    startViewCollapsible($event,element){
        console.log($event,element);
        if($event.toState === 'shown') element.style.display = 'block';
    }

    doneViewCollapsible($event,element){
        
        console.log($event,element);

        if($event.toState === 'hidden') element.style.display = 'none';
        
    }

}

@Component({
    selector: 'mc-collapsible',
    template: `
        <ul class="collapsible">
            <ng-content></ng-content>
        </ul>
    `
})
export class MCCollapsibleComponent { 
    @ContentChildren(MCCollapsibleItemDirective) collapsibleItems: QueryList<MCCollapsibleItemDirective>;

    ngAfterContentInit(){
        console.log(this.collapsibleItems.toArray());
    }
}
