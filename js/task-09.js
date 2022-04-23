const refs = {
  BtnEl: document.querySelector('.change-color'),
  SpanEl: document.querySelector('.color')
};
console.log(refs.BtnEl);
refs.BtnEl.addEventListener('click', onChangeColor);
function onChangeColor() {
  const RandomColor = getRandomHexColor();
  refs.SpanEl.innerHTML = RandomColor;
  document.body.style.backgroundColor = RandomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



console.log(getRandomHexColor);


// const refs = {
//   startBtn: document.querySelector('button[data-action="start"'),
//   stopBtn: document.querySelector('button[data-action="stop"'),
// },
//   colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ],
//   randomIntegerFromInterval = (max) => {
//     return Math.floor(Math.random() * (max + 1));
//   },
//   setRandomColor = () => {
//     const _color = colors[randomIntegerFromInterval(colors.length - 1)]
//     console.log(_color)
//     document.body.style.backgroundColor = _color
//   }

// let interval = undefined

// refs.startBtn.addEventListener('click', e => interval = interval ?
//   interval :
//   setInterval(() => setRandomColor(), 1000))

// refs.stopBtn.addEventListener('click', e => clearInterval(interval))
//   < button type = "button" data - action="start" > Start</button >
//     <button type="button" data-action="stop">Stop</button>