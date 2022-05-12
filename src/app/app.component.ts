import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, first, retry, shareReplay, take, tap } from 'rxjs/operators';
import fetch from 'node-fetch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';

  constructor(private httpClient: HttpClient) { this.q = "OK"; this.k = of("OK"); this.errorMsg = "fk" 

}

ngOnInit(): void {
  console.log('q')
  this.getConfig();
  console.log(this.q)
  console.log(this.q)
}

  q: string;
  errorMsg: string;
  k : any

  public getConfig() : void {

  
    this.httpClient.get('/api',{ responseType: 'json'})
    .pipe(
      shareReplay(1),
      catchError((e)=> { 
        console.log("issue" + e);
        return EMPTY;})
      )
      .subscribe(_re=>{this.q = JSON.stringify(_re)}, _err=>{})
      }
      
      /*
                  .pipe(shareReplay(1),catchError(s=>{return EMPTY}))
                  .subscribe(_results => null, _error=>{})
                }
                */
}
