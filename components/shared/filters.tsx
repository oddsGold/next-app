'use client';

import React from 'react';
import {Title} from "@/components/shared/title";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useIngredients, useFilters, useQueryFilters} from "@/hooks";

interface Props {
    className?: string;
}


export const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, loading} = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    }

    return (
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold"/>

            <CheckboxFiltersGroup
                title="Type of pizza"
                name='pizzaTypes'
                className="mt-5"
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                items={[
                    {text: 'Тонкое', value: '1'},
                    {text: 'Традиционное', value: '2'},
                ]}
            />

            <CheckboxFiltersGroup
                title="Sizes"
                name='sizes'
                className="mt-5"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                items={[
                    {text: '20cm', value: '20'},
                    {text: '30cm', value: '30'},
                    {text: '40cm', value: '40'},
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0} max={1000}
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={0} max={1000}
                        placeholder={"1000"}
                        value={String(filters.prices.priceTo)}
                        onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                    onValueChange={updatePrices}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                name='ingredients'
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
            />
        </div>
    )
}