import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { data } from 'src/app/shared/Models/Food';
import { Tags } from 'src/app/shared/Models/Tags';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
food:data[]=[];
  constructor(private foodservice : FoodService, activateRoute: ActivatedRoute) { 
    activateRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.food = this.foodservice.getAllFoodBySearchTearm(params.searchTerm);
      }
      else if(params.tag){
        this.food = this.foodservice.getAllFoodByTag(params.tag);
      }
      else{

        this.food = foodservice.getAll();
      }
    })

  }

  ngOnInit(): void {
  }

}
