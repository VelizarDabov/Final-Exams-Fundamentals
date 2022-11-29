function solve(input){
let carsCount = Number(input.shift());
let carObj = {};

for(let i = 0; i < carsCount; i++){
    let carLine = input.shift().split('|');
let [car, mileage, fuel] = carLine;
    carObj[car] = {
        mileage: Number(mileage),
        fuel: Number(fuel),
    }
}
let command = input.shift();
while(command !== 'Stop'){
    let currCommand = command.split(' : ');
switch (currCommand[0]) {
    case 'Drive':{
let car = currCommand[1];
let distance = Number(currCommand[2]);
let fuel = Number(currCommand[3]);
if(fuel > carObj[car].fuel){
    console.log('Not enough fuel to make that ride');
}else{
    carObj[car].fuel -= fuel;
    carObj[car].mileage += distance;
    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
}
if(carObj[car].mileage > 100000){
    console.log(`Time to sell the ${car}!`);
    delete carObj[car];
}
  
    }
        
        break;
        case 'Refuel':{
            let car = currCommand[1];
            let currFuel = Number(currCommand[2]);
            let sumFuel = Number(carObj[car].fuel + currFuel);
            if(sumFuel >= 75){
                let diff = 75  - carObj[car].fuel;
                console.log(`${car} refueled with ${diff} liters`);
                carObj[car].fuel = 75;
             
            }else{
               carObj[car].fuel += currFuel;
                console.log(`${car} refueled with ${currFuel} liters`); 
            }
        }
        
            break;
            case 'Revert':{
              let car = currCommand[1];
              let km = Number(currCommand[2]);
              carObj[car].mileage -= km;
              console.log(`${car} mileage decreased by ${km} kilometers`);
              if(carObj[car].mileage < 10000){
                carObj[car].mileage = 10000;
              }
            }
        
                break;
}
command = input.shift();
}
for (const car in carObj) {
   console.log(`${car} -> Mileage: ${carObj[car].mileage} kms, Fuel in the tank: ${carObj[car].fuel} lt.`);
        
    }


}
solve([ 

    '4', 
  
    'Lamborghini Veneno|11111|74', 
  
    'Bugatti Veyron|12345|67', 
  
    'Koenigsegg CCXR|67890|12', 
  
    'Aston Martin Valkryie|99900|50', 
  
    'Drive : Koenigsegg CCXR : 382 : 82', 
  
    'Drive : Aston Martin Valkryie : 99 : 23', 
  
    'Drive : Aston Martin Valkryie : 2 : 1', 
  
    'Refuel : Lamborghini Veneno : 40', 
  
    'Revert : Bugatti Veyron : 2000', 
  
    'Stop' 
  
  ]  )