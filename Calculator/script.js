let num1 = ""
let num2 = ""
let operator = ""
let justEvaluated = false


function addNum(a, b) 
{
    return a + b;
}

function subtractNum(a, b) 
{
    return a - b;
}

function multiplyNum(a, b)
{
    return a * b
}

function divideNum(a , b)
{
    return a / b 
}

function operate(a, b, operator)
{
    a = parseFloat(a)
    b = parseFloat(b)

    if(operator == "+")
    {
        return addNum(a, b)
    }
    else if(operator == "-")
    {
        return subtractNum(a, b)
    }
    else if(operator == "*")
    {
        return multiplyNum(a, b)
    }
    else if(operator == "/")
    {
        if(b == 0)
        {
            return "Error"
        }
        return divideNum(a, b)
    }
}

function updateDisplay()
{
    let text = '0'

    if(num2 != "")
    {
        text = num2
    }
    else if(num1 != "")
    {
        text = num1
    }

    let operands = { "+": "+", "-": "−", "*": "×", "/": "÷" }
    let expression = ""

    if(operator != "")
    {
        expression = num1 + " " + operands[operator]
    }

    document.getElementById("display").textContent = text
    document.getElementById("expression").textContent = expression
}

function clearAll()
{
    num1 = ""
    num2 = ""
    operator = ""
    justEvaluated = false
    updateDisplay()
}

function appendDigit(current, digit)
{
    if(digit == "." && current.includes("."))
    {
        return current
    }
    if(digit == "." && current == "")
    {
        return "0."
    }
    if(current == "0" && digit != ".")
    {
        return digit
    }
    return current + digit
}

function pressDigit(digit)
{
    if(justEvaluated)
    {
        clearAll()
    }

    if(operator == "")
    {
        num1 = appendDigit(num1, digit)
    }
    else
    {
        num2 = appendDigit(num2, digit)
    }

    updateDisplay()
}

function calculate()
{
    let result = operate(num1, num2, operator)

    if(result === "Error")
    {
        clearAll()
        document.getElementById("display").textContent = "Error"
        return false
    }

    num1 = String(Math.round(result * 1000000000) / 1000000000)
    num2 = ""
    return true
}

function pressOperator(op)
{
    if(num1 == "")
    {
        return
    }

    if(num2 != "")
    {
        if(!calculate())
        {
            return
        }
    }

    operator = op
    justEvaluated = false
    updateDisplay()
}

function pressEquals()
{
    if(num1 == "" || operator == "" || num2 == "")
    {
        return
    }

    if(calculate())
    {
        operator = ""
        justEvaluated = true
        updateDisplay()
    }
}