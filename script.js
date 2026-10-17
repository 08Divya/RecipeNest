// ========================================
// RECIPENEST - COMPLETE JAVASCRIPT
// ========================================


// ================================
// SEARCH
// ================================

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

if (searchInput && searchButton) {

    function searchRecipes() {

        const searchText = searchInput.value
            .trim()
            .toLowerCase()
            .replace(/biriyani/g, "biryani");

        const recipes = document.querySelectorAll(".recipe-card");

        if (searchText === "") {

            recipes.forEach(function (card) {
                card.style.display = "";
            });

            return;
        }

        let found = false;

        recipes.forEach(function (card) {

            const title = card.querySelector("h3");

            if (title) {

                const recipeName =
                    title.textContent.trim().toLowerCase();

                if (recipeName.includes(searchText)) {

                    card.style.display = "";
                    found = true;

                } else {

                    card.style.display = "none";

                }
            }
        });

        if (!found) {
            alert("Recipe not found 😔");
        }
    }

    searchButton.addEventListener("click", searchRecipes);

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            searchRecipes();
        }

    });
}


// ================================
// CATEGORY FILTER
// ================================

const categoryCards =
    document.querySelectorAll(".category-card");

const categoryRecipes = {

    "Breakfast": [
        "Fluffy Pancakes"
    ],

    "Pasta": [
        "Creamy Pasta"
    ],

    "Pizza": [
        "Cheesy Pizza",
        "Chicken Pizza"
    ],

    "Desserts": [
        "Strawberry Cake",
        "Chocolate Cake"
    ],

    "Healthy": [
        "Fresh Salad"
    ],

    "Drinks": [
        "Fresh Lemonade"
    ]

};


categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.querySelector("h3");

        if (!title) {
            return;
        }

        const category =
            title.textContent.trim();

        const selectedRecipes =
            categoryRecipes[category];

        if (!selectedRecipes) {
            return;
        }

        const recipes =
            document.querySelectorAll(".recipe-card");

        let found = false;

        recipes.forEach(function (recipe) {

            const recipeTitle =
                recipe.querySelector("h3");

            if (!recipeTitle) {
                return;
            }

            const recipeName =
                recipeTitle.textContent.trim();

            if (selectedRecipes.includes(recipeName)) {

                recipe.style.display = "";
                found = true;

            } else {

                recipe.style.display = "none";

            }

        });


        if (!found) {

            alert(
                "No " +
                category +
                " recipes available yet 😔"
            );

        } else {

            const recipesSection =
                document.querySelector(".recipes");

            if (recipesSection) {

                recipesSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// ================================
// RECIPE DETAILS
// ================================

const recipeDetails = {

    "Creamy Pasta":
        "🍝 Creamy Pasta\n\nIngredients:\n• Pasta\n• Cream\n• Cheese\n• Garlic\n• Salt & pepper\n\n⏱ Cooking Time: 30 minutes",

    "Cheesy Pizza":
        "🍕 Cheesy Pizza\n\nIngredients:\n• Pizza base\n• Cheese\n• Tomato sauce\n• Vegetables\n• Oregano\n\n⏱ Cooking Time: 25 minutes",

    "Strawberry Cake":
        "🍰 Strawberry Cake\n\nIngredients:\n• Flour\n• Sugar\n• Eggs\n• Strawberries\n• Cream\n\n⏱ Cooking Time: 45 minutes",

    "Fresh Salad":
        "🥗 Fresh Salad\n\nIngredients:\n• Lettuce\n• Tomato\n• Cucumber\n• Carrot\n• Lemon juice\n\n⏱ Preparation Time: 10 minutes",

    "Chicken Biryani":
        "🍛 Chicken Biryani\n\nIngredients:\n• Basmati rice\n• Chicken\n• Onion\n• Tomato\n• Biryani spices\n• Ginger & garlic\n\n⏱ Cooking Time: 50 minutes",

    "Veg Noodles":
        "🍜 Veg Noodles\n\nIngredients:\n• Noodles\n• Carrot\n• Cabbage\n• Capsicum\n• Soy sauce\n• Pepper\n\n⏱ Cooking Time: 20 minutes",

    "Cheesy Burger":
        "🍔 Cheesy Burger\n\nIngredients:\n• Burger bun\n• Burger patty\n• Cheese\n• Tomato\n• Lettuce\n• Mayonnaise\n\n⏱ Cooking Time: 25 minutes",

    "Chicken Pizza":
        "🍕 Chicken Pizza\n\nIngredients:\n• Pizza base\n• Chicken\n• Cheese\n• Tomato sauce\n• Vegetables\n• Oregano\n\n⏱ Cooking Time: 30 minutes",

    "Fluffy Pancakes":
        "🥞 Fluffy Pancakes\n\nIngredients:\n• Flour\n• Milk\n• Eggs\n• Sugar\n• Baking powder\n• Butter\n\n⏱ Cooking Time: 20 minutes",

    "Chicken Noodles":
        "🍜 Chicken Noodles\n\nIngredients:\n• Noodles\n• Chicken\n• Carrot\n• Cabbage\n• Capsicum\n• Soy sauce\n\n⏱ Cooking Time: 25 minutes",

    "Chocolate Cake":
        "🍫 Chocolate Cake\n\nIngredients:\n• Flour\n• Cocoa powder\n• Sugar\n• Eggs\n• Milk\n• Butter\n\n⏱ Cooking Time: 45 minutes",

    "Fresh Lemonade":
        "🥤 Fresh Lemonade\n\nIngredients:\n• Lemon\n• Water\n• Sugar\n• Ice cubes\n\n⏱ Preparation Time: 10 minutes"
};


// ================================
// VIEW RECIPE
// ================================

const detailButtons =
    document.querySelectorAll(
        ".recipe-card button:not(.favorite-btn):not(.like-btn)"
    );

detailButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const card =
            button.closest(".recipe-card");

        if (!card) {
            return;
        }

        const title =
            card.querySelector("h3");

        if (!title) {
            return;
        }

        const recipeName =
            title.textContent.trim();

        if (recipeDetails[recipeName]) {

            alert(recipeDetails[recipeName]);

        } else {

            alert(
                "Recipe details are not available yet."
            );

        }

    });

});


// ================================
// FAVORITES
// ================================

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

const favoriteRecipesBox =
    document.querySelector("#favoriteRecipes");


favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const card =
            button.closest(".recipe-card");

        if (!card) {
            return;
        }

        const title =
            card.querySelector("h3");

        if (!title) {
            return;
        }

        const recipeName =
            title.textContent.trim();

        button.textContent =
            "❤️ Favorited";


        if (favoriteRecipesBox) {

            const id =
                "favorite-" +
                recipeName.replace(/\s+/g, "-");

            const existingRecipe =
                document.getElementById(id);


            if (!existingRecipe) {

                const favoriteItem =
                    document.createElement("p");

                favoriteItem.id = id;

                favoriteItem.textContent =
                    "❤️ " + recipeName;

                favoriteRecipesBox.appendChild(
                    favoriteItem
                );


                const message =
                    favoriteRecipesBox.querySelector(
                        ".no-favorites"
                    );


                if (message) {
                    message.remove();
                }

            }

        }

    });

});


// ================================
// FAVORITES LINK
// ================================

const favoritesLink =
    document.querySelector("#favoritesLink");


if (favoritesLink) {

    favoritesLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const section =
                document.querySelector(
                    "#favoritesSection"
                );

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ================================
// CLEAR FAVORITES
// ================================

const clearFavoritesButton =
    document.querySelector("#clearFavorites");


if (
    clearFavoritesButton &&
    favoriteRecipesBox
) {

    clearFavoritesButton.addEventListener(
        "click",
        function () {

            const items =
                favoriteRecipesBox.querySelectorAll(
                    "p:not(.no-favorites)"
                );


            items.forEach(function (item) {
                item.remove();
            });


            if (
                !favoriteRecipesBox.querySelector(
                    ".no-favorites"
                )
            ) {

                const message =
                    document.createElement("p");

                message.className =
                    "no-favorites";

                message.textContent =
                    "You haven't added any favorites yet.";

                favoriteRecipesBox.appendChild(
                    message
                );

            }


            favoriteButtons.forEach(
                function (button) {

                    button.textContent =
                        "❤️ Favorite";

                }
            );


            alert("🗑️ Favorites cleared!");

        }
    );

}


// ================================
// LIKE BUTTONS
// ================================

const likeButtons =
    document.querySelectorAll(".like-btn");


likeButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (
                button.textContent.trim() ===
                "❤️ Like"
            ) {

                button.textContent =
                    "❤️ Liked";

            } else {

                button.textContent =
                    "❤️ Like";

            }

        }
    );

});