function solve(input) {
    let cityLines = input.shift();
    let cityList = {};
    while (cityLines !== 'Sail') {
        let [city, peoples, gold] = cityLines.split('||')
        if (cityList.hasOwnProperty(city)) {
            cityList[city].peoples += Number(peoples);
            cityList[city].gold += Number(gold)
        } else {
            cityList[city] = {
                peoples: Number(peoples),
                gold: Number(gold),
            }
        }
        cityLines = input.shift();
    }
    let command = input.shift();
    while (command !== 'End') {
        let [currCommand, city, arg1, arg2] = command.split('=>');

        switch (currCommand) {
            case 'Plunder':

                let peoples = Number(arg1);
                let gold = Number(arg2);

                cityList[city].peoples -= peoples;
                cityList[city].gold -= gold;

                console.log(`${city} plundered! ${gold} gold stolen, ${peoples} citizens killed.`);

                if (cityList[city].gold <= 0 || cityList[city].peoples <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete cityList[city]
if(cityList <= 1){
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
}

                }
                break;
            case 'Prosper':
                let prosperCity = city;
                city = prosperCity;
                let prosperGold = Number(arg1);
                if (prosperGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    cityList[city].gold += prosperGold;
                    let totGold = cityList[city].gold;
                    console.log(`${prosperGold} gold added to the city treasury. ${city} now has ${totGold} gold.`);

                } break;

        }
        command = input.shift();

    }
   let counter = Object.keys(cityList).length;
    console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
    for (const city in cityList) {
        let population = cityList[city].peoples;
        let totalGold = cityList[city].gold
        console.log(`${city} -> Population: ${population} citizens, Gold: ${totalGold} kg`);

    }
}
solve(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])