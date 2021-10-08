let calculator = () => {
  let elements = [] // The elements that the user'll input in the calculator
  let history = [] // The array that'll contain the historic
  let enter = element => elements.push(element)
  // The enter() function will input the elements the user choose
  let equals = () => {
    const result = _calculate(elements)
    _putOnTheList(elements.join(''), result)
    return result
  } // The equals() function that'll return the result of the calculations
  let _calculate = arr => {
    let result = arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
      if (i % 2 != 0) {
        result = _operation(result, arr[i + 1], arr[i])
      } else {
        result
      }
    }
    return result
  } // The _calculate() function will calculate the elements the user input
  let _operation = (number1, number2, operator) => {
    switch (operator) {
      case '+':
        return (number1 += number2)
      case '-':
        return (number1 -= number2)
      case '*':
        return (number1 *= number2)
      case '/':
        return (number1 /= number2)
      default:
        return 'Operador Inválido'
    }
  } // The _operation function will calculate the elements according to the operator displayed
  let _putOnTheList = (key, value) => history.push({ [key]: value })
  // function that'll insert the elements to the historic
  let list = () => history
  // functiton that'll display the historic
  let reset = () => (elements.length = 0)
  // functio that'll reset all the elements on the calculator
  return {
    elements: elements,
    enter: enter,
    equals: equals,
    list: list,
    reset: reset
  }
}
