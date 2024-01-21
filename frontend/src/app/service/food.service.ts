import { Injectable } from '@angular/core';
import { Sample_tags, sample_food } from 'data';
import { data } from '../shared/Models/Food';
import { Tags } from '../shared/Models/Tags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): data[] {
    return sample_food;
  }

  getAllFoodBySearchTearm(searchTerm: String) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tags[] {
    return Sample_tags;
  }

  getAllFoodByTag(tag: string) {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tag?.includes(tag));
  }
}
