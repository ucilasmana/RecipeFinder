const baseURL='https://www.themealdb.com/api/json/v1/1/'

export const fetcher = async(parameter) =>{
    try{
      const response = await fetch(`${baseURL}/${parameter}`)
      const data = await response.json()
      return data
    }
    catch (error){
      throw error
    }
  }

  export const fetchWithAreas = async(url) =>{
    try{
          return fetcher(`list.php?a=list`)
        .then(areas => {
          const promises = areas.meals.map(area => {
            return fetcher(`${url}=${area.strArea}`)
              .then(recipeListResponse => recipeListResponse.meals);
          });
          return Promise.all(promises);
        })
        .then(recipeLists => {
          return recipeLists.flat();
        });
      
    }
    catch (error){
      throw error
    }
  }

 


