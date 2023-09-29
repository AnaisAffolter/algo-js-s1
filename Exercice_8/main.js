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
    constructor(name, attack, defense, pv, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.pv = pv
        this.luck = luck
    }
 }

/*let isLucky = Math.random()
        console.log (isLucky)*/

let dracofeu = new Pokemon ("dracofeu", 70, 20, 200, 0.4)
        console.log (dracofeu)

let evoli = new Pokemon ("evoli", 50, 30, 150 ,0.8)
        console.log (evoli)



while(dracofeu.pv > 0 || evoli.pv < 0) {
    
    let dracofeuIsLucky = Math.random()
    console.log (dracofeu.name + " veut attaquer " + evoli.name + ".")

    if (dracofeuIsLucky < dracofeu.luck){
        attackPokemon = dracofeu.attack - evoli.defense
        evoli.pv -= attackPokemon
            console.log (evoli.name + " est attaqué par " + dracofeu.name + " et il lui inflige " + (dracofeu.attack - evoli.defense) + " PV de dégâts.")
                if (evoli.pv > 0) {
                    console.log (evoli.name + " a maintenant " + evoli.pv + " PV.")}
    } else {
        console.log(dracofeu.name + " a manqué son attaque...")
        console.log(evoli.name + " a toujours " + evoli.pv + " PV.")
    }
            if (evoli.pv < 0) {
                console.log (evoli.name + " a 0 PV et meurt...")
                console.log (dracofeu.name + " a gagné !! Il lui reste " + dracofeu.pv + " PV.")
                break
            }

    let evoliIsLucky = Math.random()
    console.log (evoli.name + " veut attaquer " + dracofeu.name + ".")

    if (evoliIsLucky < evoli.luck) {
        attackPokemon = evoli.attack - dracofeu.defense
        dracofeu.pv -= attackPokemon
            console.log (dracofeu.name + " est attaqué par " + evoli.name + " et il lui inflige " + (evoli.attack - dracofeu.defense) + " PV de dégâts.")
                if (dracofeu.pv > 0) {
                    console.log (dracofeu.name + " a maintenant " + dracofeu.pv + " PV.")}
    } else {
        console.log(evoli.name + " a manqué son attaque...")
        console.log(dracofeu.name + " a toujours " + dracofeu.pv + " PV.")
    }
            if (dracofeu.pv < 0) {
                console.log (dracofeu.name + " a 0 PV et meurt...")
                console.log (evoli.name + " a gagné !! Il lui reste " + evoli.pv + " PV.")
                break
            }
}