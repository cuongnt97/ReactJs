export const createMealCard = (meal) => {
  return `<a src="https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}">
          <div class="meal">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="meal-info">
            <h3>${meal.strMeal}</h3>
          </div>
        </div></a>`;
};

export const createDetailMealDiv = (meal) => {
  
  return `<div id="single-meal">
        <div class="single-meal">
    
          <!-- Tên món ăn (Meal) -->
          <h1>${meal.strMeal}</h1>
    
          <!-- Ảnh món ăn (MealThumb)-->
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="single-meal-info">
            <!-- Danh mục (Category) -->
            <p>${meal.strCategory}</p>
            <!-- Khu vực (Area) -->
            <p>${meal.strArea}</p>
          </div>
          <div class="main">
            <!-- Hướng dẫn (Instructions)-->
            <p>${meal.strInstructions}</p>
    
            <!-- Danh sách thành phần (Ingredient) và số lượng (Measure) -->
            <h2>Ingredients</h2>
            <ul>
              <li>Floury Potatoes - 900g</li>
              <li>Olive Oil - 2 tbsp</li>
              <li>Semi-skimmed Milk - 600ml</li>
              <li>White Fish Fillets - 800g</li>
              <li>Plain flour - 1 tbsp</li>
              <li>Nutmeg - Grating</li>
              <li>Double Cream - 3 tbsp</li>
              <li>Jerusalem Artichokes - 200g</li>
              <li>Leek - 1 finely sliced</li>
              <li>Prawns - 200g peeled raw</li>
              <li>Parsley - Large handful</li>
              <li>Dill - Handful</li>
              <li>Lemon - Grated zest of 1</li>
              <li>Gruyère - 25g grated</li>
              <li>Lemon - Juice of 1</li>
            </ul>
          </div>
        </div>
      </div>`;
}
