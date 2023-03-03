import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  formCreate!: FormGroup;


  constructor(private tourService:TourService,private router:Router ) {
  }

  ngOnInit(): void {
  }
  createForm = new FormGroup({
    id: new FormControl,
    title: new FormControl(""),
    price: new FormControl(""),
    description: new FormControl(""),
  })

  create() {
    this.tourService.createProduct(this.formCreate.value).subscribe()
    this.createForm.reset()
    this.router.navigate(["/"]);
  }

}
