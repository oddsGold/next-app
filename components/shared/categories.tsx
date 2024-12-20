'use client';

import React from 'react';
import { cn } from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
}

const cats = [
    {id: 1, name: "Pizzas"},
    {id: 2, name: "Combo"},
    {id: 3, name: "Закуски"},
    {id: 4, name: "Коктейли"},
    {id: 5, name: "Кофе"},
    {id: 6, name: "Напитки"},
    {id: 7, name: "Десерты"},
];

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state)=> state.activeId);

    return (
        <div className={cn(
            'flex flex-wrap gap-2 bg-green-50 p-2 rounded-2xl sm:flex-nowrap',
            className
        )}>
            {
                cats.map(({name, id}, index) => (
                    <a
                        className={cn(
                            'flex items-center font-bold h-11 rounded-2xl px-5 justify-center w-full sm:w-auto',
                            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                        )}
                        href={`/#${name}`}
                        key={index}>
                        <button>{name}</button>
                    </a>
                ))
            }
        </div>
    );
};
