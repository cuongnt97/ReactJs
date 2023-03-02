import { mealsSearch } from "./meal.service";
import { createMealCard } from "./ui";

export const setupSearch = (el) => {
  const btnSearch = document.querySelector("#btn-search");
  const mealList = document.querySelector("#meals");
  const onSubmit = (e) => {
    //Ngan load lai trang khi bam click button
    e.preventDefault();
    document.querySelector(".search-res").classList.remove("display-none");
    //Lay ve gia tri tu khoa tim kiem
    const keyword = document.querySelector("#search").value.trim();
    //Tim kiem mon an theo keyword
    if (keyword.length > 0) {
      mealsSearch(keyword).then((meals) => {
        mealList.innerHTML = (meals || []).map(createMealCard).join("");
      });
      document.querySelector("#single-meal").classList.add("display-none");
    }
  };

  btnSearch.addEventListener("click", onSubmit);
};
