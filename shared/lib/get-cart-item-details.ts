import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';
import { CartStateItem } from './get-cart-details';
import {Ingredient} from "@prisma/client";

export const getCartItemDetails = (
    // ingredients: CartStateItem['ingredients'],
    ingredients: Ingredient[],
    pizzaType?: PizzaType,
    pizzaSize?: PizzaSize,
): string => {
    const details = [];

    if (pizzaSize && pizzaType) {
        const typeName = mapPizzaType[pizzaType];
        details.push(`${typeName} ${pizzaSize} см`);
    }

    if (ingredients) {
        details.push(...ingredients.map((ingredient) => ingredient.name));
    }

    return details.join(', ');
};