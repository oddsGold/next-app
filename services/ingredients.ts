import {Ingredient} from "@prisma/client";
import {instance} from "./instance";
import {ApiRoutes} from "@/services/constants";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
    const { data } = await instance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

    return data;
}