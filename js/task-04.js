let counterValue = 0;
const refs = {
    valueEl: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]')
};
const decrementValueBtn = () => {
    counterValue--;
    return (refs.valueEl.textContent = counterValue);
};
const incrementValuetBtn = () => {
    counterValue++;
    return (refs.valueEl.textContent = counterValue);
};
refs.decrementBtn.addEventListener('click', decrementValueBtn);
refs.incrementBtn.addEventListener('click', incrementValuetBtn);
// const counterValue = function ({
//     rootSelector,
//     initialValue = 0,
//     step = 1 } = {}) {
//     this._value = initialValue;
//     this._step = step;
//     this._refs = this._getRefs(rootSelector);
//     this._bindEvents();
// };
// counterValue.prototype._getRefs = function (rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.decrementBtn = refs.container.querySelector('[data-action=decrement]');
//     refs.incrementBtn = refs.container.querySelector('[data-action=increment]');
//     refs.value = refs.container.querySelector('#value');
//     return refs;
// };

// counterValue.prototype._bindEvents = function () {

//     this._refs.decrementBtn.addEventListener('click', () => {
//         console.log('counterValue.prototype._bindEvents -> this', this);
//         this.decrement();
//         this.updateValueRef();
//     });

//     this._refs.incrementBtn.addEventListener('click', () => {
//         console.log('counterValue.prototype._bindEvents -> this', this);
//         this.increment();
//         this.updateValueRef();

//     })
// };


// counterValue.prototype.updateValueRef = function () {
//     this._refs.value.innerText = this._value;
// };
// counterValue.prototype.decrement = function () {
//     this._value += this._step;
// };

// counterValue.prototype.increment = function () {
//     this._value -= this._step;
// };

// const counter = new counterValue({ rootSelector: '#counter', step: 10 });
// console.log('counter', counter);
// console.log('counter', counter);
// counter.decrement();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.increment();
// console.log('counter', counter);