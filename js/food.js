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
    // extra meal containr:
    const extraMeal = document.getElementById('extra-meal-data');
    extraMeal.innerText='';
    // console.log(meals.length);
    // for(let i = 0; i < meals.length; i++){
    //     const meal = meals[i];
    //     // create new div:
    //     const div = document.createElement('div');
    //     // add new class in new div":
    //     div.classList.add('card-main');
    //     // set inner html:
    //     div.innerHTML=`
    //     <div class="card-img">
    //         <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    //     </div>
    //     <div class="body-card">
    //         <h4 class="card-title">${meal.strMeal}</h4>
    //         <p class="py-2">There are many variations of passages of available, but the majority have suffered</p>
    //         <button onclick="diteles('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">Detiles</button>
    //     </div>
    //     `;
    //     if(i < 6){
    //         // appendChild:
    //         mealContainer.appendChild(div);
    //     }else{
    //         // appendChild Extra meal  container:
    //         extraMeal.appendChild(div);
    //     }
    // }

    meals.forEach((meal, index)=> {
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
            <button onclick="diteles('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">Detiles</button>
        </div>
        `;
        if(index < 6){
            // appendChild:
            mealContainer.appendChild(div);
        }else{
            // appendChild Extra meal  container:
            extraMeal.appendChild(div);
        }
        // console.log(meal);
        
    });
}
const searchMeal = ()=>{
    const inputValue = document.getElementById('input-fieuld');
    loadMeal(inputValue.value);
    inputValue.value = "";
    console.log(inputValue);
}

const diteles = async(meleid)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meleid}`;
    const response = await fetch(url);
    const data = await response.json();
    // get parent of modal body:
    const modalContainer = document.getElementById('modal-container');
    data.meals.forEach(meals =>{
        document.getElementById('ModalLabel').innerText=meals.strMeal;
        modalContainer.innerHTML=`
            
            <img class="img-fluid" src="${meals.strMealThumb}">
            <h5>Catagory: ${meals.strCategory}</h5>
            <h5>Area: ${meals.strArea}</h5>
            <p>${meals.strInstructions}</p>
            <a class="btn btn-danger" target="_blank" href="${meals.strYoutube}">Youtube Video</a>
        `;
        console.log(meals);
    })
    // console.log(data.meals); 
}
// See all button:
const showAll = () =>{
    const showContainer = document.getElementById('extra-meal-data');
    showContainer.style.display='grid';
    document.getElementById('show-All').style.display='none';
}
loadMeal('fish');
