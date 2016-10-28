import { Component } from '@angular/core';

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

            <div class="row">
                <div class="card light-green lighten-5">
                    <div class="card-content">
                        <span class="card-title">{{framework.title}}</span>
                        <p>{{framework.description}}</p>
                    </div>
                    <div class="card-action">
                        <a href="#" class="blue-text">This is a link</a>
                    </div>
                </div>
            </div>



        </div>
    </section>

    `
})
export class JFSFrameworkListComponent { 

    frameworks:any = [
        {
        "title": "Angular",
        "description": "Javascript Framework used for mobile and web apps",
        "category": "framework",
        "url": "angular.io",
        "demo": "angular.io",
        "tags": "javascript, typscript",
        "ratings": null,
        "company": "google",
        "authors": "google"
        },
        {
        "title": "Echojs",
        "description": "Javascript feeds website",
        "category": "news",
        "url": "echojs.com",
        "demo": "echojs.com",
        "tags": "javscript, news, blog",
        "ratings": null,
        "company": "echojs",
        "authors": "echojs"
        },
        {
        "title": "React",
        "description": "Javscript Framework ",
        "category": "framework",
        "url": "https://facebook.github.io/react/",
        "demo": "https://facebook.github.io/react/",
        "tags": "javascript, jsx, typscript",
        "ratings": null,
        "company": "Facebook",
        "authors": "facebook"
        },
        {
        "title": "Egjs",
        "description": "A set of UI interactions, effects and\n utilities components library",
        "category": "library",
        "url": "https://naver.github.io/egjs/",
        "demo": "https://naver.github.io/egjs/",
        "tags": "javascript, jquery, animation, effects",
        "ratings": null,
        "company": "https://naver.github.io/",
        "authors": "naver"
        },
        {
        "title": "node.js",
        "description": "Server side javascript framework",
        "category": "server",
        "url": "https://nodejs.org/en/",
        "demo": "https://nodejs.org/en/",
        "tags": "javascript, v8, server",
        "ratings": null,
        "company": "https://nodejs.org/en/",
        "authors": "nodejs"
        }
    ];

}
