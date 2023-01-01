const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const equals = document.querySelector("#equals");
const input = document.querySelector("#input");
const result = document.querySelector("#result")

const AC = document.querySelector("#clear")
const del = document.querySelector("#delete")

AC.addEventListener("click", () => {
  location.reload()
})

del.addEventListener("click", () =>{
 input.innerHTML = input.innerHTML.slice(0, -1)
})

numbers.forEach(number => {
  number.addEventListener("click", () => {
    sessionStorage.removeItem("operator");

    if(number.value == "." ){

      if (typeof(Storage) !== "undefined") {
        if (sessionStorage.decimal) {
          sessionStorage.decimal = Number(sessionStorage.decimal) + 1;
        } else {
          sessionStorage.decimal = 1;
        } if(sessionStorage.decimal > 1) return 
      }
     };

    input.value += number.value;
    input.innerHTML += number.value;
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", () => {
    sessionStorage.removeItem("decimal");

    if(operators){

      if (typeof(Storage) !== "undefined") {
        if (sessionStorage.operator) {
          sessionStorage.operator = Number(sessionStorage.operator) + 1;
        } else {
          sessionStorage.operator = 1;
        } if(sessionStorage.operator > 1) return 
      }
     };

    input.value += operator.value;
    input.innerHTML += operator.value;
  });
});

equals.addEventListener("click", () => {
   eval(input.textContent);
   result.innerHTML = eval(input.textContent);
});