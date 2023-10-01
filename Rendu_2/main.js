/*Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
Une équipe de choc est présente pour le neutraliser.
Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…), 
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une 
caractéristique prise de celles disponibles (toujours aléatoire).
Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
Le tueur attaque un des survivants :
- soit le survivant meurt
- soit le survivant esquive et inflige 10 points de dégâts
- soit le survivant inflige 15 points de dégâts mais meurt
Les morts seront affichés à la fin
Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort, 
Les survivants ont gagné mais RIP à X, X, X…) */




class Character {

    isAlive = true
    damageValue = 10
    deathDamageValue = 15

    constructor(death, damage, deathDamage, name, caracteristic) {
        this.death = death
        this.damage = damage
        this.deathDamage = deathDamage
        this.name = name
        this.caracteristic = caracteristic
    }

    CalculateAction() {

        let rand = Math.random()
        if (rand <= this.death) {
            this.isAlive = false
            console.log(jason.name + " a tué " + this.name)
        }
        else if (rand > this.death && rand < this.death + this.damage) {
            jason.JasonDamage(this.damageValue)
            console.log(this.name + " a esquivé et a infligé " + this.damageValue + " PV à " + jason.name)
        }
        else if (rand >= this.death + this.damage) {
            jason.JasonDamage(this.deathDamageValue)
            this.isAlive = false
            console.log(jason.name + " a tué " + this.name + " mais " + this.name + " a infligé " + this.deathDamageValue + " PV à " + jason.name)
        }
    }


}

class Killer {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }

    JasonDamage(damage) {
        this.hp -= damage
    }


}


let jason = new Killer("Jason", 100)

let characterName = ["Paul", "Jean", "Benjamin", "Nathan", "Lucas", "Christophe", "Anne", "Julie", "Momo", "Christelle", "Elise", "Catrine", "Christophe", "Julien", "Danielle", "Fatou"]
let characterCaracteristic = ["nerd", "sportif", "blonde", "chanceux", "peureux", "maladroit", "joyeux", "timide", "extravertie"]

let firstSurvivor = new Character(0.3, 0.5, 0.2, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
let secondSurvivor = new Character(0.1, 0.4, 0.5, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
let thirdSurvivor = new Character(0.7, 0.2, 0.1, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
let fourthSurvivor = new Character(0.4, 0.3, 0.3, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
let fifthSurvivor = new Character(0.2, 0.2, 0.6, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])

let survivor = [firstSurvivor, secondSurvivor, thirdSurvivor, fourthSurvivor, fifthSurvivor]

let survivorStillAlive = true

let currentSurvivor = 0

let ripMessage = "les survivants ont gagné mais RIP a "


/*console.log (jason)
console.log (firstSurvivor)
console.log (secondSurvivor)
console.log (thirdSurvivor)
console.log (fourthSurvivor)
console.log (fifthSurvivor)
console.log (survivor)*/

/*firstSurvivor.isAlive = false
console.log (survivor[0].isAlive)*/


while (jason.hp > 0 && survivorStillAlive) {

    console.log(jason.name + " attaque " + survivor[currentSurvivor].name)

    survivor[currentSurvivor].CalculateAction()

    for (let i = 0; i < survivor.length; i++) {
    
        if (survivor[i].isAlive) {

            survivorStillAlive = true
            break

        } else {
            survivorStillAlive = false
        }
    }
    if (!survivor[currentSurvivor].isAlive) {
        currentSurvivor += 1
    }
}

if (jason.hp <= 0) {
    console.log(jason.name + " est mort !!!")

    for (let i = 0; i < survivor.length; i++) {
        if (!survivor[i].isAlive) {
            ripMessage += survivor[i].name + ", "
        }
    }
    console.log(ripMessage)
}

if (!survivorStillAlive) {
    console.log(jason.name + " a tué tous les survivants... dommage, il lui restait " + jason.hp + " PV.")
}




/*for (let i = 0; survivor.length(); i++) {

    if (survivor[i].isAlive) {

        survivorStillAlive = true 
        break      

    } else {
        survivorStillAlive = false
    }*/






