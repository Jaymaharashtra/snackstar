import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Tags } from 'src/app/shared/Models/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tag?:Tags[];
  constructor(foodService : FoodService) { 
    this.tag = foodService.getAllTags();
  }

  ngOnInit(): void {
  }

}
