import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class ComercialdesempenioService {

	urlBase: string = 'http://localhost:3000/api/consultant';

	



	constructor(
		private _http : HttpClient,
	) { 
		
	}

	private httpOptions = {
		headers : new HttpHeaders({
		'Content-Type':  'application/json'
		})
	}

	getConsultant(): Observable<any>{
		let url = `${this.urlBase}`
		return this._http.get(url,this.httpOptions)
	}


	generateInform(data : any): Observable<any>{
		return this._http.post<any[]>(`${this.urlBase}/inform`, data, this.httpOptions)
	}
}
