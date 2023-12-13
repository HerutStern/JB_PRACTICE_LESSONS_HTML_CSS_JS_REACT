

// 2 TIMER FUNCTIONS:

// setTimeout(function, number) = gets a function what to do when time ends, and a time

// setInterval(function, number) = function what to do every time, 
//              the time the function waits befor running again (thousandths of a second).
// clearInterval() - tells the setInterval to stop.


let seconds = 0

const startCounting = () => {
  // GETTING THE OBJECT FROM THE HTML IF THE COUNTER DISPLAY
  const counterDisplay = document.getElementById("counterDisplay")

  // GETTING THE OBJECT FROM THE HTML IF THE NUMBER TO COUNT DOWN
  const numberInput = document.getElementById("numberInput").value

  // DISPLAYING THE INPUT NUMBER ON THE COUNTER 
  counterDisplay.innerText = numberInput

  // USING THE INPUT NUMBER AS A PARAMETER
  seconds = numberInput

  // CHECKING EVERYTHING WORKS
  console.log(`seconds = ${seconds}`)

  // COUNTING DOWN USING setInterval
  const intervalId = setInterval(() => {
    // DISPLAYING THE COUNTER
    counterDisplay.innerText = seconds
    // SECONDS - 1
    seconds = seconds - 1

    // WHEN TO STOP THE LOOP
    if (seconds == -1){
      clearInterval(intervalId)
    }

  }, 1000);
}

