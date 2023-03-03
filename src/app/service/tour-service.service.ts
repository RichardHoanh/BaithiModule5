import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tour} from "../model/Tour";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TourService implements OnInit{


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getAll() :Observable<Tour[]>{
    return this.http.get<Tour[]>("http://localhost:3000/tours");
  }


  createProduct(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>("http://localhost:3000/tours", tour);
  }

  findById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`http://localhost:3000/tours/${id}`);
  }

  updateProduct(id: number,tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`http://localhost:3000/tours/${id}`, tour);
  }



  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/tours/${id}`);
  }


}




