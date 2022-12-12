function solve(input) {
    let word = '';
    let command = input.shift();
    let index = [];
    while (command !== 'End') {
        let currCommand = command.split(' ');

        switch (currCommand[0]) {
            case 'Add': {
                let currWord = currCommand[1];
                word += currWord;
            }

                break;
            case 'Print':
                console.log(word);
                break;
            case 'Remove':
                let substring = currCommand[1];
                if (word.includes(substring)) {
                    word = word.replace(substring, '');
                }

                break;
            case 'Index':
                let char = currCommand[1];
                for (let i = 0; i < word.length; i++) {
                    if (char === word[i]) {
                        index.push(i);
                    }
                }
                if (index.length === 0) {
                    console.log('None');
                } else {
                    console.log(index.join(' '));
                }

                break;
            case 'Upgrade':{
                let char = currCommand[1];
                if(word.includes(char)){
                    let charCode = char.charCodeAt();
                    let newChar = String.fromCharCode(charCode + 1);
                    let splittedWord = word.split('');
                 for(let i = 0; i < word.length; i++){
                    if(char == word[i]){
                  let newWord =  word.replace(char, newChar);
                 word = newWord
                    }
                 }
                }
            }

                break;

        }



        command = input.shift();
    }




}
solve(["Add University", 
"Print", 
"Upgrade n", 
"Print", 
"Index i", 
"Remove sity", 
"Print", 
"End"]) 