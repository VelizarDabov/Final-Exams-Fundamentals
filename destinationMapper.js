function solve(destination){
let pattern = /(=|\/)(?<town>[A-Z][A-Za-z]{2,})\1/g;

let towns = [];
let counter = 0

if(pattern.test(destination)){
    let ourDest = destination.match(pattern);

ourDest.forEach(destination => {
    counter += (destination.length - 2);
    towns.push(destination.slice(1,(destination.length - 1)))
});
}
 
console.log(`Destinations: ${towns.join(', ')}`);
console.log(`Travel Points: ${counter}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")