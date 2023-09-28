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

/*class Pokemon {
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
}*/


class Pokemon {
    constructor(name, attack, defense, hp, luck, isLucky){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
        this.isLucky = isLucky
    }
 }

let dracofeu = new Pokemon ("dracofeu", 70, 20, 200, 0.6, Math.random())
        console.log (dracofeu)

let evoli = new Pokemon ("evoli", 50, 30, 150 ,0.5, Math.random())
        console.log (evoli)


       


while(dracofeu.hp > 0 || evoli.hp < 0) {

    if (dracofeu.isLucky > dracofeu.luck){
        attackPokemon = dracofeu.attack - evoli.defense
        evoli.hp -= attackPokemon
            console.log (evoli.name + " est attaqué par " + dracofeu.name + " et il lui inflige " + dracofeu.attack + " PV de dégâts.")
    }
    else {
        console.log(dracofeu.name + " a manqué son attaque...")
    }
            if (evoli.hp < 0) {
                console.log (evoli.name + " est mort...")
                console.log (dracofeu.name + " a gagné !!")
                break
            } else {
                console.log (evoli.name + " a maintenant " + evoli.hp + " PV.")
            }

    if (evoli.isLucky > dracofeu.luck) {
        attackPokemon = evoli.attack - dracofeu.defense
        dracofeu.hp -= attackPokemon
            console.log (dracofeu.name + " est attaqué par " + evoli.name + " et il lui inflige " + evoli.attack + " PV de dégâts.")
    }    
    else {
        console.log(evoli.name + " a manqué son attaque...")
    }
            if (dracofeu.hp < 0) {
                console.log (dracofeu.name + " est mort...")
                console.log (evoli.name + " a gagné !!")
                break
            } else {
                console.log (dracofeu.name + " a maintenant " + dracofeu.hp + "PV.")
            }
}