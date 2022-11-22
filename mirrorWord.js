function mirrorWord(input){
let text = input[0];
let pattern = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
let matches = [...text.matchAll(pattern)];
let mirrorWord = [];

for (const match of matches) {
    let first = match[2];
    let second = match[3];
    let reversed = second.split('').reverse().join('');
    if(first === reversed){
        mirrorWord.push(first + ' <=> ' + second)
    }
}
if(matches.length === 0){
    console.log(`No word pairs found!`);
    console.log('No mirror words!');
}else{
    console.log(`${matches.length} word pairs found!`);
    if(mirrorWord.length === 0){
        console.log('No mirror words!');
    }else{
        console.log('The mirror words are:');
        console.log(mirrorWord.join(', '));
    }
}
}
mirrorWord([ 

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r' 
    
    ] )