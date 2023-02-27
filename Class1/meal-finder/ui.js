export const createMealCard = (meal) => {
    console.log('idMeal', meal.idMeal);
  return `<div class="meal">
          <a src="https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="meal-info">
            <h3>${meal.strMeal}</h3>
          </div></a>
        </div>`;
};
