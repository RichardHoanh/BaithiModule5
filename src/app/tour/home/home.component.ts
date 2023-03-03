import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourService} from "../../service/tour-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges{

  tours: Tour[] = []
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
    this.tourService.getAll().subscribe((data)=>{
      this.tours = data
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tourService.getAll().subscribe((data)=>{
      this.tours = data
    })
  }


}
