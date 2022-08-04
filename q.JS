let age = prompt("")

function askage(age) {

    if (age >= 18) {

        console.log("Welcome");

    } else if (age < 18, age > 0){

        console.log("Error");

    } else if (typeof(age) !== "number" || age < 0) {

        console.log("Дебил");
    }
}

askage(age)


// ******************************************************************


// function count(number_one, number_two, operator) {

//     switch (operator) {

//         case "%":

//             console.log(number_one % number_two);
//             break;

//         case "+":

//             console.log(number_one + number_two);
//             break;

//         case "-":

//             console.log(number_one - number_two);
//             break;

//         case "/":

//             console.log(number_one / number_two);
//             break;

//         case "*":
//             console.log(number_one * number_two);
//             break;

//     }

// }

// count(12, 5, "%")


// ******************************************************************


// function name(...names) {

//     let name_ = ""

//     for (let item of names) {

//         if (item.length > name_.length) {

//             name_ = item
//         }
//     }

//     console.log(name_);
// }

// name("Alex", "George", "Michael")


// ******************************************************************


// function getMin(a, ...b) {

//     if (typeof (a) === "number") {

//         return Math.min(a, ...b)

//     } else if (Array.isArray(a)) {

//         return Math.min(...a, ...b)

//     } else if (typeof (a) === "object") {

//         let values = Object.values(a)

//         let values2 = Object.values(...b)

//         return Math.min(...values, ...values2)
//     }
// }
// console.log(getMin(1, 2));

// console.log(getMin([1, 2]));

// console.log(getMin({ a: 1, b: 2 }, { a: 11, b: 22 }));


// ******************************************************************


// function propor(a, b) {

//     let percent = b / (a / 100);

//     console.log(b + " от " + a + " будет " + percent + "%");

// }

// propor(1000, 100)


// ******************************************************************


// function fibanaci(length) {

//     let arr = [0, 1]

//     for (let i = 0; i <= length; i++) {

//         arr.push(arr[i] + arr[i + 1])
//     }

//     console.log(arr);
// }

// fibanaci(10)