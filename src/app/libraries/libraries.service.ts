import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Library} from "./library/library.model"
import {LIBRARY_API} from "../app.api"

import {ErrorHandler } from '../app.error-handler'

import {MenuItem} from '../book-detail/menu-item/menu-item.model'

@Injectable()
export class LibrariesService {

    constructor(private http: Http){}

    libraries(): Observable<Library[]> {
      return this.http.get(`${LIBRARY_API}/livros`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }


    bookById(id: string) : Observable<Library>{
      return this.http.get(`${LIBRARY_API}/livros/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    reviewsOfBook(id: string) : Observable<any>{
        return this.http.get(`${LIBRARY_API}/libraries/${id}/reviews`)
          .map(response => response.json())
          .catch(ErrorHandler.handlerError)
    }

    menuOfLibrary(id:string): Observable<MenuItem[]>{

      return this.http.get(`${LIBRARY_API}/libraries/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }





}
