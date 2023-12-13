
// 2 TIMER FUNCTIONS:

// setTimeout(function, number) = gets a function what to do when time ends, and a time

// setInterval(function, number) = function what to do every time, 
//              the time the function waits befor running again (thousandths of a second).
// clearInterval() - tells the setInterval to stop.












// EXERCISE
// 1 - do the same, but count up
// 2 - count down, give seconds to start and seconds to stop counting
// 3 - count up, give seconds to start and seconds to stop counting


// let seconds = 0

// const startTime = () => {
//   seconds = document.getElementById("seconds-number").value
//   const timerInterval = setInterval ( () => {
//     const timerDisplay = document.getElementById("timer")
//     timerDisplay.innerText = seconds
//     seconds--
//     if (seconds === -1) {
//       timerDisplay.innerText = "TIME IS UP"
//       clearInterval(timerInterval)
//     }
//   }, 1000
//   )
// }
