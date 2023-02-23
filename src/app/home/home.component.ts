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
  foods:Foods[]=[];

  constructor(private foodService : FoodService,private router :ActivatedRoute){}
  
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem']){
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else{
        this.foods = this.foodService.getAll();
      }
    })
    //Binding all image to home component when page loads;
      this.foods = this.foodService.getAll(); 
  }

}
