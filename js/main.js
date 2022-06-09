var elForm = document.querySelector ("js-form");
var elInput = document.querySelector ("js-input");
var elSelect = document.querySelector ("js-select");
var elText = document.querySelector ("js-text");

elForm.addEventListener("submit" , function(event) {
    event.preventDefault();

    var elInputSum = elInput.value;
    var elSelectСurrency = elSelect.value;

    elText.textContent =  elInputSum / elSelectСurrency ;
    console.log( elInputSum / elSelectСurrency );
})

console.log()