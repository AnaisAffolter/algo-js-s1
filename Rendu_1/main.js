/*Exo 1 : Le taxi
John essaie de rentrer chez lui en taxi. 
Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux 
rouges de chez lui.
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et 
qu’il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements



1. créer un tableau playlist
2. créer une classe personnage (nom + PV)
3. créer le personnage et afficher dans la console (enlever si on reussit ça)
4. créer une fonction trajet (dans la classe)(parametre playlist)
- variable du nombre de changement de taxi = 0 et ensuite elle augmente
- vairable du nombre de feux rouges passés ou restants = 0 au début
- tant qu'on a pas passé les 30 feux et que la vie est supérieur à 0 --> while continu (condition du while)
    - nombre de feux rouges +1 
    - 1 musique aléatoire de la playlist 
        - le cas Anissa --> perd 1 point et 1 changements de taxi en plus (console log 1 taxis en +)
        - Sinon il continue dans le taxi (RIEN ne se passe)
    - Si il a 0 de vie il explose (break) --> au bout de combien de feux il expllose
    - Si il est arrivé à 30 feux (break) --> console.log arrivé chez lui en combien de taxi et à quel vie
5. Appeler trajet (john.trajet (playlist))

    IMPORTANT : si on arrive pas au random des musiques on ecoute a chaque fois wejdene (il arrivera jamais chez lui)
    nombre de changement de taxi qui s'incrémante pas obligatoire si on arrive pas. 

trajet (character) {
    while (...)
}

*/

class Character {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }


    traject(playlist) {

            let taxiChange = 0 
            //console.log (taxiChange)
            let redLights = 0
            //console.log (redLights)
            //console.log (Math.floor(Math.random() * 4))

            while(this.hp > 0 || redLights < 30) {
                redLights += 1
                console.log ("nombre de feux rouges passées " + redLights)
                
                let random = (playlist[Math.floor(Math.random() * 4)])
                console.log ("une musique passe à la radio... " + random)
                
                
                if (random === playlist[0]) {
                    this.hp -= 1
                    taxiChange += 1
                    console.log (this.name + " a perdu 1 PV et a actuellement " + this.hp + " PV." )
                    console.log ("il a changé de taxi " + taxiChange + " fois.")
                } 
                if (this.hp === 0) {
                    console.log (this.name + " explose !!! Il a passé " + redLights + (" feux rouges."))
                    break
                }
                if (redLights === 30) {
                    console.log (this.name + (" est arrivé chez lui avec " + this.hp + " PV et il a prit " + taxiChange + " taxis." ))
                    break
                }
            }
    }
}


let john = new Character ("john", 10)

//console.log (john)

let playlist = ["anissa - wejdene", "oneTake - lilTJay", "martin&gina - poloG", "fast - juiceWorld", "imperfections - popSmoke"]


john.traject(playlist)
