const elements = [
    { name: 'Hydrogen', symbol: 'H', atomicNumber: 1 },
    { name: 'Helium', symbol: 'He', atomicNumber: 2 },
    { name: 'Lithium', symbol: 'Li', atomicNumber: 3 },
    { name: 'Beryllium', symbol: 'Be', atomicNumber: 4 },
    { name: 'Boron', symbol: 'B', atomicNumber: 5 },
    { name: 'Carbon', symbol: 'C', atomicNumber: 6 },
    { name: 'Nitrogen', symbol: 'N', atomicNumber: 7 },
    { name: 'Oxygen', symbol: 'O', atomicNumber: 8 },
    { name: 'Fluorine', symbol: 'F', atomicNumber: 9 },
    { name: 'Neon', symbol: 'Ne', atomicNumber: 10 },
    { name: 'Sodium', symbol: 'Na', atomicNumber: 11 },
    { name: 'Magnesium', symbol: 'Mg', atomicNumber: 12 },
    { name: 'Aluminum', symbol: 'Al', atomicNumber: 13 },
    { name: 'Silicon', symbol: 'Si', atomicNumber: 14 },
    { name: 'Phosphorus', symbol: 'P', atomicNumber: 15 },
    { name: 'Sulfur', symbol: 'S', atomicNumber: 16 },
    { name: 'Chlorine', symbol: 'Cl', atomicNumber: 17 },
    { name: 'Argon', symbol: 'Ar', atomicNumber: 18 },
    { name: 'Potassium', symbol: 'K', atomicNumber: 19 },
    { name: 'Calcium', symbol: 'Ca', atomicNumber: 20 },
    { name: 'Scandium', symbol: 'Sc', atomicNumber: 21 },
    { name: 'Titanium', symbol: 'Ti', atomicNumber: 22 },
    { name: 'Vanadium', symbol: 'V', atomicNumber: 23 },
    { name: 'Chromium', symbol: 'Cr', atomicNumber: 24 },
    { name: 'Manganese', symbol: 'Mn', atomicNumber: 25 },
    { name: 'Iron', symbol: 'Fe', atomicNumber: 26 },
    { name: 'Cobalt', symbol: 'Co', atomicNumber: 27 },
    { name: 'Nickel', symbol: 'Ni', atomicNumber: 28 },
    { name: 'Copper', symbol: 'Cu', atomicNumber: 29 },
    { name: 'Zinc', symbol: 'Zn', atomicNumber: 30 },
    { name: 'Gallium', symbol: 'Ga', atomicNumber: 31 },
    { name: 'Germanium', symbol: 'Ge', atomicNumber: 32 },
    { name: 'Arsenic', symbol: 'As', atomicNumber: 33 },
    { name: 'Selenium', symbol: 'Se', atomicNumber: 34 },
    { name: 'Bromine', symbol: 'Br', atomicNumber: 35 },
    { name: 'Krypton', symbol: 'Kr', atomicNumber: 36 },
    { name: 'Rubidium', symbol: 'Rb', atomicNumber: 37 },
    { name: 'Strontium', symbol: 'Sr', atomicNumber: 38 },
    { name: 'Yttrium', symbol: 'Y', atomicNumber: 39 },
    { name: 'Zirconium', symbol: 'Zr', atomicNumber: 40 }
    // Add more elements as needed
];

let targetElement = elements[Math.floor(Math.random() * elements.length)];

function displayHint() {
    document.getElementById('hint').innerText = `Please enter a ${targetElement.name.length}-letter word\nHint: ${targetElement.atomicNumber}th element in periodic table`;
}

function checkGuess() {
    const guess = document.getElementById('guess').value.trim();
    if (guess.length !== targetElement.name.length) {
        document.getElementById('feedback').innerText = 'Incorrect length. Please try again.';
        return;
    }

    if (guess.toLowerCase() === targetElement.name.toLowerCase()) {
        document.getElementById('feedback').innerText = 'Congratulations! You guessed correctly.';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect guess. Try again!';
    }
}

// Initialize the game
displayHint();
