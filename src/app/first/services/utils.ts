import {Observable, of} from "rxjs/index";


export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead
    return of(result as T);
  };
}
