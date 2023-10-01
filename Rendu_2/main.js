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

    constructor(death, damage, deathDamage, name, caracteristic){
        this.death = death
        this.damage = damage
        this.deathDamage = deathDamage
        this.name = name
        this.caracteristic = caracteristic
    }




}  

class Killer {
        constructor(name, hp) {
            this.name = name
            this.hp = hp
        } 
    }

    
    let jason = new Killer ("Jason", 100)

    let characterName = ["Paul", "Jean", "Benjamin", "Nathan", "Lucas", "Christophe", "Anne", "Julie", "Momo", "Christelle", "Elise", "Catrine", "Christophe", "Julien", "Danielle", "Fatou"]
    let characterCaracteristic = ["nerd", "sportif", "blonde", "chanceux", "peureux", "maladroit", "joyeux", "timide", "extravertie"]
    
    let firstSurvivor = new Character (0.3, 0.5, 0.8, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
    let secondSurvivor = new Character (0.2, 0.8, 0.6, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
    let thirdSurvivor = new Character (0.7, 0.2, 0.4, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
    let fourthSurvivor = new Character (0.4, 0.8, 0.7, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
    let fifthSurvivor = new Character (0.8, 0.6, 0.2, characterName[Math.floor(Math.random() * 15)], characterCaracteristic[Math.floor(Math.random() * 8)])
    
    let survivor = [firstSurvivor, secondSurvivor, thirdSurvivor, fourthSurvivor, fifthSurvivor]
    

    console.log (jason)
    console.log (firstSurvivor)
    console.log (secondSurvivor)
    console.log (thirdSurvivor)
    console.log (fourthSurvivor)
    console.log (fifthSurvivor)
    console.log (survivor)


    /*firstSurvivor.isAlive = false
    console.log (survivor[0].isAlive)
     console.log (jason.name + "atta")*/

         while (jason.hp > 0 /*|| survivor.isAlive = false*/ ) {
           



                
            break

                        

                        

        }




   
    
    


