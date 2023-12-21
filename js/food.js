const loadMeal = async(search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayMeals(data.meals);
    }catch(error){
        console.log(error);
    }
}

const displayMeals = meals =>{
    // get the parent element :
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText=' ';
    meals.forEach(meal => {
        // create new div:
        const div = document.createElement('div');
        // add new class in new div":
        div.classList.add('card-main');
        // set inner html:
        div.innerHTML=`
        <div class="card-img">
            <img class="img-fluid" src="${meal.strMealThumb}" alt="">
        </div>
        <div class="body-card">
            <h4 class="card-title">${meal.strMeal}</h4>
            <p class="py-2">There are many variations of passages of available, but the majority have suffered</p>
            <button class="btn btn-success">Detiles</button>
        </div>
        `;
        // appendChild:
        mealContainer.appendChild(div);
        // console.log(meal);
        
    });
}
const searchMeal = ()=>{
    const inputValue = document.getElementById('input-fieuld');
    loadMeal(inputValue.value);
    inputValue.value = "";
    console.log(inputValue);
}
loadMeal('fish');