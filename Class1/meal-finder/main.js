import './style.css'
import { getRandomMeal } from './meal.service';
import { setupSearch } from './search';
import { randomMeal } from './randomMeal';


window.onload = () => {
    randomMeal();
}
setupSearch(app);


