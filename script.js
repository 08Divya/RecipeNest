// ================================
// RecipeNest - JavaScript
// ================================


// SEARCH BUTTON
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

if (searchInput && searchButton) {

    searchButton.addEventListener("click", function () {

        const searchText = searchInput.value.trim().toLowerCase();
        const recipes = document.querySelectorAll(".recipe-card");

        if (searchText === "") {
            recipes.forEach(function (card) {
                card.style.display = "block";
            });
            return;
        }

        let found = false;

        recipes.forEach(function (card) {

            const name = card.querySelector("h3");

            if (name) {
                const recipeName = name.textContent.toLowerCase();

                if (recipeName.includes(searchText)) {
                    card.style.display = "block";
                    found = true;
                } else {
                    card.style.display = "none";
                }
            }

        });

        if (!found) {
            alert("Recipe not found 😔");
        }

    });


    // ENTER KEY SEARCH
    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            searchButton.click();
        }

    });

}


// CATEGORY CARDS
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const categoryName = card.querySelector("h3").textContent;

        alert("You selected: " + categoryName + " 🍳");

    });

});


// RECIPE DETAILS
const recipeDetails = {

    "Creamy Pasta":
        "🍝 Creamy Pasta\n\nIngredients:\n• Pasta\n• Cream\n• Cheese\n• Garlic\n• Salt & pepper\n\n⏱ Cooking Time: 30 minutes",

    "Cheesy Pizza":
        "🍕 Cheesy Pizza\n\nIngredients:\n• Pizza base\n• Cheese\n• Tomato sauce\n• Vegetables\n• Oregano\n\n⏱ Cooking Time: 25 minutes",

    "Strawberry Cake":
        "🍰 Strawberry Cake\n\nIngredients:\n• Flour\n• Sugar\n• Eggs\n• Strawberries\n• Cream\n\n⏱ Cooking Time: 45 minutes",

    "Fresh Salad":
        "🥗 Fresh Salad\n\nIngredients:\n• Lettuce\n• Tomato\n• Cucumber\n• Carrot\n• Lemon juice\n\n⏱ Preparation Time: 10 minutes"

};


// VIEW RECIPE BUTTONS
const detailButtons = document.querySelectorAll(".recipe-card button:not(.favorite-btn)");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const card = button.closest(".recipe-card");
        const name = card.querySelector("h3");

        if (name) {
            alert(recipeDetails[name.textContent]);
        }

    });

});


// FAVORITE BUTTONS
const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoriteRecipesBox = document.querySelector("#favoriteRecipes");

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        button.textContent = "❤️ Favorited";

        if (favoriteRecipesBox) {

            const card = button.closest(".recipe-card");
            const name = card.querySelector("h3");

            if (name) {

                const recipeName = name.textContent;

                const existingRecipe = document.getElementById(
                    "favorite-" + recipeName.replace(/\s+/g, "-")
                );

                if (!existingRecipe) {

                    const favoriteItem = document.createElement("p");

                    favoriteItem.id =
                        "favorite-" + recipeName.replace(/\s+/g, "-");

                    favoriteItem.textContent = "❤️ " + recipeName;

                    favoriteRecipesBox.appendChild(favoriteItem);

                    const message =
                        favoriteRecipesBox.querySelector(".no-favorites");

                    if (message) {
                        message.remove();
                    }

                }

            }

        }

    });

});


// FAVORITES LINK
const favoritesLink = document.querySelector("#favoritesLink");

if (favoritesLink) {

    favoritesLink.addEventListener("click", function (event) {

        event.preventDefault();

        alert("❤️ Your favorite recipes will appear here!");

    });

}


// CLEAR FAVORITES
const clearFavoritesButton =
    document.querySelector("#clearFavorites");

if (clearFavoritesButton && favoriteRecipesBox) {

    clearFavoritesButton.addEventListener("click", function () {

        const favoriteItems =
            favoriteRecipesBox.querySelectorAll("p:not(.no-favorites)");

        favoriteItems.forEach(function (item) {
            item.remove();
        });

        if (!favoriteRecipesBox.querySelector(".no-favorites")) {

            const message = document.createElement("p");

            message.className = "no-favorites";
            message.textContent =
                "You haven't added any favorites yet.";

            favoriteRecipesBox.appendChild(message);

        }

        favoriteButtons.forEach(function (button) {
            button.textContent = "❤️ Favorite";
        });

        alert("🗑️ Favorites cleared!");

    });

}


// FOOD LOVERS LIKE BUTTONS
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent.trim() === "❤️ Like") {
            button.textContent = "❤️ Liked";
        } else {
            button.textContent = "❤️ Like";
        }

    });

});