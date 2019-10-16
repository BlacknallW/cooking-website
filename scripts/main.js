let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button')

const setUserName = () => {
    let myName = prompt("Please enter your name.", "[Visitor]");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to the Cooking Corner,${myName}!`;
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = `Welcome to the cooking corner, ${storedName}!`;
    }
}

myButton.onclick = function() {
    setUserName();
}
