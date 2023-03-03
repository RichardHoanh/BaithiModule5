import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../service/tour-service.service";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit{
  id:any;
  tour:any;
  constructor(private route: ActivatedRoute,private tourService:TourService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data

      })
    })

  }

}
