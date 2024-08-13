const options = {
    "Shopping": {
        "Clothing": {
            "Men": {},
            "Women": {},
            "Kids": {},
            "Accessories": {}
        },
        "Electronics": {
            "Phones": {
                "iPhone": {},
                "MI": {},
                "Samsung": {},
                "OnePlus": {}
            },
            "Fans": {},
            "Lights": {},
            "Hotpot": {}
        },
        "Books": {
            "Fiction": {},
            "Non-Fiction": {},
            "Comics": {},
            "Textbooks": {}
        },
        "Shoes": {
            "Sports": {},
            "Casual": {},
            "Formal": {},
            "Boots": {}
        }
    },
    "Travel": {
        "Destinations": {
            "Beach": {},
            "Mountain": {},
            "City": {},
            "Countryside": {}
        },
        "Packages": {
            "Budget": {},
            "Luxury": {},
            "Adventure": {},
            "Family": {}
        }
    },
    "Restaurants": {
        "Cuisine": {
            "Italian": {},
            "Chinese": {},
            "Indian": {},
            "Mexican": {}
        },
        "Dining": {
            "Fine Dining": {},
            "Casual Dining": {},
            "Fast Food": {},
            "Cafes": {}
        }
    },
    "Single Meet": {
        "Date": {
            "Blind Date": {},
            "Online Date": {},
            "Speed Date": {},
            "Dinner Date": {}
        },
        "Location": {
            "Park": {},
            "Cafe": {},
            "Restaurant": {},
            "Beach": {}
        }
    }
};

function renderOptions(currentOptions) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = ''; // Clear previous options
    for (let option in currentOptions) {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option-div');
        optionDiv.innerText = option;
        optionDiv.onclick = () => handleOptionClick(currentOptions[option]);
        container.appendChild(optionDiv);
    }
}

function handleOptionClick(subOptions) {
    if (Object.keys(subOptions).length > 0) {
        renderOptions(subOptions); // Render sub-options
    } else {
        alert('You have made a selection!');
        renderOptions(options); // Reset to initial options after selection
    }
}

// Initialize the quiz with the top-level options
renderOptions(options);
