import {Ingredient} from "@prisma/client";
import React from "react";
import {API} from "@/services/api-client";

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const response = await API.ingredients.getAllIngredients();
                setIngredients(response);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients()
    }, []);

    return {ingredients, loading};
}