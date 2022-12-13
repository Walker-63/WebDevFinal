/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var numOfDaysSelected = 0;
var CostTotal = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayElementsClicked(day) {
    if (day.classList.contains("clicked")) {


        day.classList.remove("clicked")

    }

    else {
        day.classList.add("clicked")
    }
    CostTotal = costPerDay*numOfDaysSelected;
    calcCost();
 }

document.getElementById("monday").addEventListener("click", function() {dayElementsClicked(this);})
document.getElementById("tuesday").addEventListener("click", function() {dayElementsClicked(this);})


document.getElementById("wednesday").addEventListener("click", function() {dayElementsClicked(this);})
document.getElementById("thursday").addEventListener("click", function() {dayElementsClicked(this);})

document.getElementById("friday").addEventListener("click", function() {dayElementsClicked(this);})



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function daysClear(){
    document.getElementById("moday").classList.remove("clicked")



    document.getElementById("tuesday").classList.remove("clicked")



    document.getElementById("wednesday").classList.remove("clicked")
    document.getElementById("thurday").classList.remove("clicked")
    document.getElementById("friday").classList.remove("clicked")
    CostTotal = 0
    numOfDaysSelected = 0
    calcCost()
}

document.getElementById("clear-button").addEventListener("click", daysClear)



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function forHalfDays(){

    document.getElementById("full").classList.remove("clicked");

    document.getElementById("half").classList.add("clicked")

    costPerDay = 20

    CostTotal = numOfDaysSelected*costPerDay;


    calcCost();
}
document.getElementById("half").addEventListener("click", forHalfDays)

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function forFullDays(){

    document.getElementById("full").classList.add("clicked");

    document.getElementById("half").classList.remove("clicked");

    costPerDay = 35;

    CostTotal = numOfDaysSelected*costPerDay;

    calcCost();
}

document.getElementById("full").addEventListener("click", forFullDays)



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calcCost() {
    document.getElementById("calculated-cost").innerHTML = CostTotal;
}
