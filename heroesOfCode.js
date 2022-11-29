function solve(input) {
    let objHeroes = {};
    let heroesCount = Number(input.shift());

    for (let i = 0; i < heroesCount; i++) {
        let [name, hp, mp] = input.shift().split(' ')
        objHeroes[name] = {
            hp: Number(hp),
            mp: Number(mp),
        }
    }
    let command = input.shift();
    while (command !== 'End') {
        let currCommand = command.split(' - ');
        let name = currCommand[1]
        switch (currCommand[0]) {

            case 'CastSpell': {
                let neededMp = Number(currCommand[2]);
                let spellName = currCommand[3];
                let diff = objHeroes[name].mp - neededMp;
                if (diff >= 0) {
                    objHeroes[name].mp -= neededMp;
                    console.log(`${name} has successfully cast ${spellName} and now has ${objHeroes[name].mp} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
            }
                break;
            case 'TakeDamage': {
                let damage = Number(currCommand[2]);
                let attacker = currCommand[3];
                let diff = objHeroes[name].hp - damage;
                if (diff > 0) {
                    objHeroes[name].hp -= damage;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${objHeroes[name].hp} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete objHeroes[name];
                }
            }
                break;
            case 'Recharge': {
                let amount = Number(currCommand[2]);
                let maxMp = 200;
                let sumMp = objHeroes[name].mp + amount;
                let diff = maxMp - objHeroes[name].mp;
                if (sumMp >= maxMp) {
                    objHeroes[name].mp = maxMp;
                    console.log(`${name} recharged for ${diff} MP!`);
                } else {
                    objHeroes[name].mp += amount;
                    console.log(`${name} recharged for ${amount} MP!`);
                }
            }

                break;
            case 'Heal': {
                let amountHp = Number(currCommand[2]);
                let maxHp = 100;
                let sumHp = objHeroes[name].hp + amountHp;
                let diff = maxHp - objHeroes[name].hp;

                if (sumHp > maxHp) {
                    objHeroes[name].hp = maxHp;
                    console.log(`${name} healed for ${diff} HP!`);
                } else {
                    objHeroes[name].hp += amountHp;
                    console.log(`${name} healed for ${amountHp} HP!`);
                }

            }

                break;
        }
        command = input.shift();
    }
    for (const name in objHeroes) {
        console.log(name);
       console.log(`  HP: ${objHeroes[name].hp}`);
    console.log(`  MP: ${objHeroes[name].mp}`);
    }

}
solve(['4',

    'Adela 90 150',
    
    'SirMullich 70 40',
    
   'Ivor 1 111',
    
   'Tyris 94 61',
    
    'Heal - SirMullich - 50',
    
'Recharge - Adela - 100',
    
    'CastSpell - Tyris - 1000 - Fireball',
    
   'TakeDamage - Tyris - 99 - Fireball',
    
   'TakeDamage - Ivor - 3 - Mosquito',
    
    'End'])