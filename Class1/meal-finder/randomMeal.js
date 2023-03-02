import { getRandomMeal } from "./meal.service";
import { createDetailMealDiv } from "./ui";

export const randomMeal = () => {

    const detailMeal = document.querySelector("#single-meal");
    getRandomMeal.then(meals => {
        detailMeal.innerHTML = meals.map(createDetailMealDiv).join('');
    })

    const searchDiv = document.querySelector('.search-res');
    searchDiv.classList.add('display-none');
    

}