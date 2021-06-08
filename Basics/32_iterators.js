console.log("This is the tutorial for iterators");

// Iterator object

function vegiesIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else
            {
                return {
                    done: true
                }
            }
        }
    }
}

let vegArray = ["Potato", "Tomato", "Cabbage", "Okra", "Pumpkin"];

let result = vegiesIterator(vegArray);
console.log(result.next());
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next());
