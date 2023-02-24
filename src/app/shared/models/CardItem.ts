import { Foods } from "./food";

export class CardItem{
    constructor(food:Foods){
        this.food = food;
        this.price;
    }
    food:Foods;
    quantity:number=1;
    price():number{
        return this.food.price * this.quantity; 
    }


}