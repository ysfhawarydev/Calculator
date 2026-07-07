const buttonInput = document.querySelector ( '#display' ) ;
const number = document.querySelectorAll ( '.num' ) ;
const operators = [ '+' , '-' , '/' , '*' , '%' ]
const invalidValues = [ '.' , 'Math Error' , 'Syntax Error' , 'undefined' ] ;
let answer = '' ;

number.forEach ( element => {

        element.addEventListener ( 'click' , (  ) => {
            buttonInput.value += element.textContent ;
        } ) ;

} ) ;

const operator = document.querySelectorAll ( '.operator' ) ;

operator.forEach ( action => {

    action.addEventListener ( 'click' , (  ) => {
        buttonInput.value += action.textContent ;
    } ) ;

} )

const del = document.querySelector ( '.delete' ) ;

del.onclick = function (  ) {
    let other = buttonInput.value.slice ( 0 , -1 ) ;
    buttonInput.value = other ;
} ;

const ac = document.querySelector ( '.clear' ) ;

ac.onclick = function (  ) {
    buttonInput.value = '' ;
}

const math = document.querySelectorAll ( '.math' ) ;

math.forEach ( scientific => {

    scientific.addEventListener ( 'click' , (  ) => {
        
        if ( scientific.classList.contains ( 'sqrt' ) ) {
            buttonInput.value = Math.sqrt ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'square' ) ) {
            buttonInput.value = Math.pow ( buttonInput.value , 2 ) ;
        }

        else if ( scientific.classList.contains ( 'cube' ) ) {
            buttonInput.value = Math.pow ( buttonInput.value , 3 ) ;
        }

        else if ( scientific.classList.contains ( 'pow' ) ) {
            buttonInput.value += '^' ;
        }

        else if ( scientific.classList.contains ( 'pi' ) ) {

            if ( buttonInput.value != '' ) {
                buttonInput.value = buttonInput.value * Math.PI ;
            }

            else {
                buttonInput.value = Math.PI ;
            }

        }

        else if ( scientific.classList.contains ( 'e' ) ) {

            if ( buttonInput.value != '' ) {
                buttonInput.value = buttonInput.value * Math.E ;
            }

            else {
                buttonInput.value = Math.E ;
            }

        }

        else if ( scientific.classList.contains ( 'abs' ) ) {
            buttonInput.value = Math.abs ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'random' ) ) {
            buttonInput.value = Math.random (  ) ;
        }

        else if ( scientific.classList.contains ( 'sin' ) ) {
            let degrees = Number ( buttonInput.value ) ;
            let radians = degrees * Math.PI / 180 ;
            buttonInput.value = Math.sin ( radians ) ;
        }

        else if ( scientific.classList.contains ( 'cos' ) ) {
            let degrees = Number ( buttonInput.value ) ;
            let radians = degrees * Math.PI / 180 ;
            let result = Math.cos ( radians ) ;

            if ( Math.abs ( result ) < 1e-10 ) {
                buttonInput.value = 0 ;
            }

            else {
                buttonInput.value = result ;
            }
            
        }

        else if ( scientific.classList.contains ( 'tan' ) ) {
            let degrees = Number ( buttonInput.value ) ;
            let radians = degrees * Math.PI / 180 ;
            let sinResult = Math.sin ( radians ) ;
            let cosResult = Math.cos ( radians ) ;
            let result = sinResult / cosResult ;

            if ( Math.abs ( cosResult ) < 1e-10 ) {
                buttonInput.value = 'Math Error' ;
            }

            else {
                buttonInput.value = result ;
            }
            
        }

        else if ( scientific.classList.contains ( 'log' ) ) {
            buttonInput.value = Math.log10 ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'ln' ) ) {
            buttonInput.value = Math.log ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'floor' ) ) {
            buttonInput.value = Math.floor ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'ceil' ) ) {
            buttonInput.value = Math.ceil ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'round' ) ) {
            buttonInput.value = Math.round ( buttonInput.value ) ;
        }

        else if ( scientific.classList.contains ( 'sign' ) ) {

            if ( operators.includes ( buttonInput.value ) || invalidValues.includes ( buttonInput.value ) ) {
                return ;
            }

            if ( buttonInput.value.startsWith ( '-' ) ) {
                buttonInput.value = buttonInput.value.slice ( 1 ) ;
            }

            else {
                buttonInput.value = '-' + buttonInput.value ;
            }

        }

        else if ( scientific.classList.contains ( 'reciprocal' ) ) {

            if ( operators.includes ( buttonInput.value ) || invalidValues.includes ( buttonInput.value ) ) {
                buttonInput.value = 'Math Error' ;
            }

            else if ( Number ( buttonInput.value ) === 0 ) {
                buttonInput.value = 'Math Error' ;
            }

            else {
                buttonInput.value = 1 / buttonInput.value ;
            }

        }

        else if ( scientific.classList.contains ( 'factorial' ) ) {
            
            if ( Number ( buttonInput.value ) === 0 ) {
                    buttonInput.value = '1' ;
                }

            else {

                if ( buttonInput.value >= 0 && buttonInput.value == Math.floor ( buttonInput.value ) ) {
                    
                    for ( let i = buttonInput.value - 1 ; i >= 1 ; i-- ) {
                        buttonInput.value *= i ;
                    }

                }

                else {
                    buttonInput.value = 'Math Error' ;
                }
                
            }

        }

    } )

} )

const equal = document.querySelector ( '.equal' ) ;

equal.onclick = function (  ) {
    
    try {

        if ( buttonInput.value.trim (  ) === '' ) {
            return ;
        }

        if ( buttonInput.value.includes ( '^' ) ) {
            let [ first , second ] = buttonInput.value.split ( '^' ) ; 
            let result = Math.pow ( Number( first ) , Number ( second ) ) ; 
            buttonInput.value = result ;
            answer = result ;
        }

        else {
            let result = eval ( buttonInput.value ) ;

            if ( result === Infinity || result === -Infinity ) {
                buttonInput.value = 'Math Error' ;
            }

            else {
                buttonInput.value = result ;
                answer = result ;
            }
        }

    }

    catch {
        buttonInput.value = 'Syntax Error' ;
    }

}

const ans = document.querySelector ( '.ans' ) ;

ans.onclick = function (  ) {
    buttonInput.value += answer ;
}

document.addEventListener ( 'keydown' , ( event ) => {

    if ( event.key === 'Backspace' ) {
        event.preventDefault (  ) ;
        del.click (  ) ;
    }

    else if ( event.key === 'Escape' ) {
        event.preventDefault (  ) ;
        ac.click (  ) ;
    }

    else if ( event.key === 'Enter' ) {
        event.preventDefault (  ) ;
        equal.click (  ) ;
    }

    number.forEach ( button => {
        if ( button.textContent === event.key ) {
            event.preventDefault (  ) ;
            button.click (  ) ;
        }
    } ) ;

    operator.forEach ( button => {
        if ( button.textContent === event.key ) {
            event.preventDefault (  ) ;
            button.click (  ) ;
        }
    } ) ;

} ) ;