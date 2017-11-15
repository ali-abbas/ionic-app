import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class RedditService{

    http:any;
    baseUrl: String;

    constructor(http:Http){

        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r';
    }

    getPost(category,limit){
        // this is observable
        // https://www.reddit.com/r/sports/top.json?limit=30
         return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res => res.json()); 
     
    }





}