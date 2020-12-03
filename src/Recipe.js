import React from "react";
import "./App.css";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div id='recipeStyle' className={style.recipe}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredients) => (
					<li>{ingredients.text}</li>
				))}
			</ol>
			<p className='calorieStyle'>Calories for this recipe are: {calories}</p>
			<img src={image} />
		</div>
	);
};

export default Recipe;
