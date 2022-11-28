function solve(input) {
    let pieces = Number(input.shift());
    let obj = {};


    for (let i = 0; i < pieces; i++) {
        let currPiece = input.shift().split('|');
        let piece = currPiece[0];
        let composer = currPiece[1];
        let key = currPiece[2];

        obj[piece] = {
            composer: composer,
            key: key,
        }
    }
    let command = input.shift();
    while (command !== 'Stop') {
        let currCommand = command.split('|');

        switch (currCommand[0]) {
            case 'Add':
                {
                    let piece = currCommand[1];
                    let composer = currCommand[2];
                    let key = currCommand[3];

                    if (obj.hasOwnProperty(piece)) {
                        console.log(`${piece} is already in the collection!`);
                    } else {
                        obj[piece] = {
                            composer: composer,
                            key: key,
                        }
                        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                    }
                }
                break;
            case 'Remove': {
                let piece = currCommand[1];

                if (!obj.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    console.log(`Successfully removed ${piece}!`);
                    delete obj[piece];
                }

            }
                break;
            case 'ChangeKey': {
                let piece = currCommand[1];
                let newKey = currCommand[2];
                if (obj.hasOwnProperty(piece)) {
                    obj[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
            }

                break;

        }

        command = input.shift();

    }
    for (const piece in obj) {
        console.log(`${piece} -> Composer: ${obj[piece].composer}, Key: ${obj[piece].key} `);
    }


}
solve([ 

    '3', 
  
    'Fur Elise|Beethoven|A Minor', 
  
    'Moonlight Sonata|Beethoven|C# Minor', 
  
    'Clair de Lune|Debussy|C# Minor', 
  
    'Add|Sonata No.2|Chopin|B Minor', 
  
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 
  
    'Add|Fur Elise|Beethoven|C# Minor', 
  
    'Remove|Clair de Lune', 
  
    'ChangeKey|Moonlight Sonata|C# Major', 
  
    'Stop'   
  
  ] )