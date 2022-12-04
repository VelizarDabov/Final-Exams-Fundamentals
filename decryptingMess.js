function solve(input) {
    let message = input.shift();
    let command = input.shift();

    while (command !== 'Finish') {
        let currCommand = command.split(' ');
        switch (currCommand[0]) {
            case 'Replace': {
                let currentChar = currCommand[1];
                let newChar = currCommand[2];
                message = message.split(currentChar).join(newChar);
                console.log(message);
            }
                break;
            case 'Cut': {
                let startIndex = Number(currCommand[1]);
                let endIndex = Number(currCommand[2]);

                if (0 > startIndex || message.length < endIndex) {
                    console.log('Invalid indices!');
                } else {
                    let firstPart = message.substring(0, startIndex);
                    let secondPart = message.substring(startIndex, endIndex);
                    let lastPart = message.substring(endIndex + 1);
                    message = firstPart + lastPart;
                    console.log(message);
                }

            }

                break;
            case 'Make': {
                let action = currCommand[1];
                if (action == 'Upper') {
                    message = message.toUpperCase();
                    console.log(message);
                } else {
                    message = message.toLowerCase();
                    console.log(message);
                }
            }

                break;
            case 'Check': {
                let string = currCommand[1];
                if (!message.includes(string)) {
                    console.log(`Message doesn't contain ${string}`);
                } else {
                    console.log(`Message contains ${string}`);
                }

            }

                break;
            case 'Sum': {
                let startIndex = Number(currCommand[1]);
                let endIndex = Number(currCommand[2]);
                if (startIndex < 0 || endIndex > message.length){
                    console.log('Invalid indices!');
                }else{
                    let substring = message.substring(startIndex, endIndex + 1);
                    let sum = 0;
                    for (let i = 0; i < substring.length; i++) {
                        sum += substring.charCodeAt(i)
                    }
                    console.log(sum);
                }

            }

                break;

        }
        command = input.shift();
    }



}
solve(["ILikeSoftUni", 

"Replace I We", 

"Make Upper", 

"Check SoftUni", 

"Sum 1 4", 

"Cut 1 4", 

"Finish"]) 