// jsframeworks services
import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class JFrameworksService {

    constructor(private _http:Http) {}

    getJFrameworks(){
        return this._http.get('/api/jf');
    }
}