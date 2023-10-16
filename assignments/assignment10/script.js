class Toy {
    constructor(name, price, ageRange, rating, imageFileName) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.imageFileName = imageFileName;
    }
    
    getToyItem() {
        return {
            name: this.name,
            price: this.price,
            ageRange: this.ageRange,
            rating: this.rating,
            imageFileName: this.imageFileName
        };
    }

    getDetails() {
        return `<strong>${this.name}</strong> <br><strong>Price:</strong> ${this.price}<br><strong>Age Range:</strong> ${this.ageRange}<br><strong>Rating:</strong> ${this.rating} stars`;
    }
}


const toys = [
    new Toy('Bear', '$7.00', '1-8', '4', 'bear.jpg'),
    new Toy('Ball', '$5.00', '4-14', '2', 'ball.jpg'),
    new Toy('Doll', '$15.00', '6-12', '3', 'doll.jpg'),
    new Toy('Horse', '$40.00', '3-7', '5', 'horse.jpg'),
    new Toy('House', '$18.00', '8-13', '1', 'house.jpg'),
    new Toy('Lion', '$10.00', '1-8', '4', 'lion.jpg')
];

const container = document.getElementById('toy-container');

function createToyElement(toy) {
    const toyDiv = document.createElement('div');
    toyDiv.className = 'toy';
    const img = document.createElement('img');
    img.src = `img/${toy.imageFileName}`;
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'toy-info';
    detailsDiv.innerHTML = toy.getDetails();
    toyDiv.appendChild(img);
    toyDiv.appendChild(detailsDiv);
    return toyDiv;
}

function displayToys(toys) {
    toys.forEach(toy => {
        const toyElement = createToyElement(toy);
        container.appendChild(toyElement);
    });
}

window.onload = () => {
    displayToys(toys);
};