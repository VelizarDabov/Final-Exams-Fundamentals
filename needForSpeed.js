function solve(input) {
    const carNumber = Number(input.shift());
    let carObj = {}
    for (let i = 0; i < carNumber; i++) {
        let [car, mileage, fuel] = input.shift().split('|');

        if (!carObj.hasOwnProperty(car)) {
            carObj[car] = { mileage: Number(mileage), fuel: Number(fuel) }
        }
    }
    let [command, carName, value, value2] = input.shift().split(' : ');
    value = Number(value);
    value2 = Number(value2);
    while (command[0] !== 'Stop') {

    switch (command) {
        case 'Drive':
            let distance = Number(value)
            let fuel = Number(value2)

            if(fuel> carObj[carName].fuel){
                console.log('Not enough fuel to make that ride');
            }else if (carObj[carName].fuel > fuel){
              carObj[carName].fuel -= fuel;
              carObj[carName].mileage += distance;

            console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if(carObj[carName].mileage >= 100000){
                console.log(`Time to sell the ${carName}!`);
                delete carObj[carName];
            }
            }
            break;
    
            case 'Refuel':
            let fuelForRefill = Number(value);
            if(carObj[carName].fuel + fuelForRefill >= 75){
                console.log(`${carName} refueled with ${75 - carObj[carName].fuel} liters`);
                carObj[carName].fuel = 75;
            }else{
                carObj[carName].fuel += fuelForRefill;
                console.log(`${carName} refueled with ${fuelForRefill} liters`);
            }
                break;
                case 'Revert':
            let kms = value;
            if(carObj[carName].mileage - kms <= 10000){
                carObj[carName].mileage = 10000;
            }else{
                carObj[carName].mileage -= kms;
                console.log(`${carName} mileage decreased by ${kms} kilometers`);
            }
            break;
    }


    [command, carName, value, value2] = input.shift().split(' : ');
   if(command === 'Stop'){
   
    
      let arr = Object.entries(carObj)
    
      for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i][0]} -> Mileage: ${arr[i][1].mileage} kms, Fuel in the tank: ${arr[i][1].fuel} lt.`);
      }
    break;
   }
   
}



}
solve([ 

    '3', 
  
    'Audi A6|38000|62', 
  
    'Mercedes CLS|11000|35', 
  
    'Volkswagen Passat CC|45678|5', 
  
    'Drive : Audi A6 : 543 : 47', 
  
    'Drive : Mercedes CLS : 94 : 11', 
  
    'Drive : Volkswagen Passat CC : 69 : 8', 
  
    'Refuel : Audi A6 : 50', 
  
    'Revert : Mercedes CLS : 500', 
  
    'Revert : Audi A6 : 30000', 
  
    'Stop' 
  
  ] )