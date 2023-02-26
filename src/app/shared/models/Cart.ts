import { CardItem } from "./CarItem";

export class Cart{
    items:CardItem[]=[];
    get totalPrice() : number{
        let totalPrice = 0;
        this.items.forEach(item =>{
            totalPrice += item.food.price;
        })
        return totalPrice;
    }
}