/*class hero{
    constructor(name, attack, pv) {
        this.name = name
        this.attack = attack
        this.pv = pv
    }
    getLife() {
        console.log(this.pv)
    }    
}

class monsters {
    constructor (pv, attack){
        this.pv = pv
        this.attack = attack
    }
}


let reinor = new hero ("Reinor", 120, 300)
let gnome = new monsters (10, 1200)

if (gnome.pv -= reinor.attack <=0) {
    console.log("le gnome est mort.")
}

*/

class Pokemon {
    constructor(name, attack, defense, hp){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }
 }

let dracofeu = new Pokemon ("dracofeu", 70, 20, 200)
        console.log (dracofeu)

let evoli = new Pokemon ("evoli", 50, 30, 150)
        console.log (evoli)



while(dracofeu.hp > 0 || evoli.hp < 0) {
    attackPokemon = dracofeu.attack - evoli.defense
        evoli.hp -= attackPokemon

            if (evoli.hp < 0) {
                console.log (evoli.name + " est mort.")
                break
            } else {
                console.log (evoli.name + " a " + evoli.hp + " hp.")
            }

    attackPokemon = evoli.attack - dracofeu.defense
        dracofeu.hp -= attackPokemon
            if (dracofeu.hp < 0) {
                console.log (dracofeu.name + " est mort.")
                break
            } else {
                console.log (dracofeu.name + " a " + dracofeu.hp + " hp.")
            }
}

