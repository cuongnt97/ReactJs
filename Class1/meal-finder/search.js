import { mealsSearch } from "./meal.service";
import { createMealCard } from "./ui";

export const setupSearch = (el) => {
  console.log(el);
  const btnSearch = document.querySelector("#btn-search");
  const mealList = document.querySelector("#meals");

  const onSubmit = (e) => {
    //Ngan load lai trang khi bam click button
    e.preventDefault();
    //Lay ve gia tri tu khoa tim kiem
    const keyword = document.querySelector("#search").value.trim();
    //Tim kiem mon an theo keyword
    if (keyword.length > 0) {
      mealsSearch(keyword).then((meals) => {
        mealList.innerHTML = (meals || []).map(createMealCard).join("");
        console.log("sub-mealList", mealList);
      });
    }
    console.log("mealList", mealList);
  };

  btnSearch.addEventListener("click", onSubmit);
};
