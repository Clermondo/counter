
let count = 0
let countEl = document.getElementById("count-el") //Value in parenthesis is called passing in argument
let saveEl = document.getElementById("save-el")

function increment() {
    console.log("The button was clicked")
    count++
    console.log(count)
    countEl.innerText = count
}

function save(){
  let savedCount = count + " | "
  console.log("You have " + count + " passengers onboard")
  saveEl.textContent += savedCount
}

function reset(){
  count = 0
  countEl.innerText = count
}
