import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';

export class BaseApi {
    constructor(public httpClient: HttpClient){
        
    }
    protected  baseUrl:string = environment.baseUrl;
    private headers: HttpHeaders = new HttpHeaders()
                        .append('Content-Type','application/json');
    protected get(url: string){
        return this.httpClient.get(url, {headers: this.headers});
    }
    protected post(url: string, data: any){
        return this.httpClient.post(url, data, {headers: this.headers});
    }
    protected put(url:string, data:any){
        return this.httpClient.put(url, data, {headers: this.headers});
    }

    protected delete(url){
        return this.httpClient.delete(url, {headers: this.headers});
    }
    
    
}