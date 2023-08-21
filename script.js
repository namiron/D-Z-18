

//------------------------------------------------------------------Калькулятор--------------------------------
//знайти константи
// Знайти усі кнопки
//написати функціі вирахуваннь
//написати подію яка буде працувати тільки тоді коли натискають на необхідну кнопку

function getValues() {
	const firstNumber = parseFloat(document.getElementById('firstNumber').value)
	const secondNumber = parseFloat(document.getElementById('secondNumber').value)
	return [firstNumber, secondNumber]
}
function showResult(result) {
	document.getElementById('result').value = result
}

function getPlus() {
	const result = getValues()[0] + getValues()[1]
	showResult(result)
}
function getMinus() {
	const result = getValues()[0] - getValues()[1]
	showResult(result)
}
function getMultiplication() {
	const result = getValues()[0] * getValues()[1]
	showResult(result)
}
function getDivision() {
	const result = getValues()[0] / getValues()[1]
	showResult(result)
}


//------------------------------------------------------------------Калькулятор--------------------------------


//--------------------------------------------------------------------конвертер валют-----------------------------

// побудувати структуру
// добути значення структури
// розробити функціі знаходження цін(доллари,евро)

function getDataMoney() {
	const euro = 40
	const dollar = 37
	const uan = parseFloat(document.getElementById('uan').value)
	return [euro, dollar, uan]
}

function Sum() {
	const resultDollar = getDataMoney()[2] / getDataMoney()[1]
	document.getElementById('dollar').value = resultDollar.toFixed(2)
	const resultEuro = getDataMoney()[2] / getDataMoney()[0]
	document.getElementById('euro').value = resultEuro.toFixed(2)
}

//-------------------------------------------------------------------------рік народження ----------------------------------------------

//отриматти данні (input,обект)

//вивести результат у орьентир у вигляді строки innerText


function ageUser() {
	const dataUser = parseFloat(document.getElementById('data-birth').value)
	const flowYear = 2023
	const age = flowYear - dataUser
	document.querySelector('.user-age').innerText = ` вам ${age} років`;
}




//----------------Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)


function foresight() {
	for (let i = 0; i < 3; i++) {
		let desires = ['money', 'love', 'car', 'sex', 'house', 'children', 'good body', 'girls']
		let random = Math.floor(Math.random() * desires.length)
		console.log(desires[random]);
		let parentElement = document.querySelector('.foresight')
		let div = document.createElement('div')
		div.innerHTML = `<p>${desires[random]}</p>`
		parentElement.append(div)
	}
}



//----------------------------------------------------------------------Загальна функція подій
window.onload = function () {
	document.querySelector('.minus').onclick = getMinus
	document.querySelector('.add').onclick = getPlus
	document.querySelector('.multiply').onclick = getMultiplication
	document.querySelector('.divide').onclick = getDivision
	document.querySelector('.convector').onclick = Sum
	document.querySelector('.math').onclick = ageUser
	document.querySelector('.desires').onclick = foresight
}

function externalFunction(interiorFunction) {
	console.log(interiorFunction(9, 1));

}

let randomResults = (max, min) => min + Math.floor(Math.random() * max);

externalFunction(randomResults);



