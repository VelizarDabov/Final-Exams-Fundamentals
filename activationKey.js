function solve(input) {
    let activationKey = input.shift();
    let instructions = input.shift();

    while (instructions !== 'Generate') {
        let instruction = instructions.split('>>>');
        let command = instruction[0];

        switch (command) {

            case 'Contains': {
                let substring = instruction[1];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
            }
                break;
            case 'Flip': {
                let casing = instruction[1];
                let startIndex = instruction[2];
                let endIndex = instruction[3];
                let part = activationKey.substring(startIndex, endIndex);
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                activationKey = activationKey.replace(part, newPart);
                console.log(activationKey);

            }
                break;
            case 'Slice': {
                let startIndex = instruction[1];
                let endIndex = instruction[2];
let firstPart = activationKey.substring(0, startIndex);
let secondPart = activationKey.substring(startIndex, endIndex);
let lastPart = activationKey.substring(endIndex);

activationKey = firstPart + lastPart;
console.log(activationKey);

            }
                break;
        }
        instructions = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"])