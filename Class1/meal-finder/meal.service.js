export const getRandomMeal = fetch(
  "https://www.themealdb.com/api/json/v1/1/random.php"
)
  .then((response) => response.json())
  .catch((err) => console.log(err));

export const mealsSearch = (keyword) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then((response) => response.json())
    .then((err) => console.log(err));
