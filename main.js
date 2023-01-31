const form = document.querySelector("form")
const submitBtn = document.querySelector("form button")
const inputs = document.querySelectorAll("input")
const cardholderName = document.querySelector(".card__name")
const cardNumber = document.querySelector(".card__number")
const cardExpDate = document.querySelector(".card__exp-date")
const cardCvc = document.querySelector(".card__cvc")
const name = document.querySelector("input[name='name']")
const number = document.querySelector("input[name='number']")
const month = document.querySelector("input[name='month']")
const year = document.querySelector("input[name='year']")
const cvc = document.querySelector("input[name='cvc']")
const errorMsg = document.querySelector(".error-msg")
const thankyou = document.querySelector(".thank-you")
const continueBtn = document.querySelector(".thank-you button")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let isValid = true
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error")
      input.style.borderColor = "hsl(0, 100%, 66%)"
      isValid = false
    } else if (input.dataset.validation === "number" && isNaN(input.value)) {
      errorMsg.innerText = "Wrong format, numbers only"
      input.parentElement.classList.add("error")
      isValid = false
    } else {
      input.parentElement.classList.remove("error")
      input.style.borderColor = "hsl(270, 3%, 87%)"
    }
  })
  if (isValid) {
    form.style.display = "none"
    thankyou.style.display = "grid"
  }
})

continueBtn.addEventListener("click", () => {
  form.reset()
  form.style.display = "grid"
  thankyou.style.display = "none"
})

name.addEventListener("keyup", () => {
  cardholderName.innerText = name.value
})

number.addEventListener("keyup", () => {
  console.log(number.value)
  cardNumber.innerHTML = number.value.match(/.{1,4}/g).join(" ")
})

cvc.addEventListener("keyup", () => {
  cardCvc.innerHTML = cvc.value
})

month.addEventListener("keyup", () => {
  cardExpDate.innerHTML = month.value + "/" + year.value
})

year.addEventListener("keyup", () => {
  cardExpDate.innerHTML = month.value + "/" + year.value
})
