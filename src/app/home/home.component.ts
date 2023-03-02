import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodCount:number=0;
  foods:Foods[]=[];

  constructor(private foodService : FoodService,private route :ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem']){

        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        this.foodCount = this.foods.length;
      }
      else if(params['tag']){
        this.foods = this.foodService.getAllFoodByTag(params['tag']);
        this.foodCount = this.foods.length;
      }
      else{
        this.foods = this.foodService.getAll();
        this.foodCount = this.foods.length;
      }
    })
    //Binding all image to home component when page loads;
     // this.foods = this.foodService.getAll(); 
  }

}
