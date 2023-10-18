let adiveceNumber = document.querySelector('.number');
let mainQuote = document.querySelector('.quote');
let diceBtn = document.querySelector('.dice')
const url = 'https://api.adviceslip.com/advice';

async function getData() {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data.slip.advice);
    console.log(data.slip.id)
    adiveceNumber.innerHTML = "advice #" + data.slip.id
    mainQuote.innerHTML =`"${data.slip.advice}"`
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
diceBtn.addEventListener('click', getData);




