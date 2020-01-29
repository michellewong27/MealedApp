import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard(props){
    let { recipe } = props;
    return(
        <div className="recipes" onClick={()=>props.fetchRecipe(recipe)}>
            <Link to={{pathname:`/recipes/${recipe.id}`,
                        recipe: recipe
                        }}
                        className='link'>            
                <h1>♦ {recipe.title}</h1>
            </Link>
        </div>
    )
}

export default RecipeCard;