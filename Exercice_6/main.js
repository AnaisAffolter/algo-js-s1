let names = []
names.push("Vincent","Paul","Arthur")

for(let i = 0; i < names.length; i++){
    names[i] += " va à la pêche"
    console.log (names[i])
}
// console.log(names)




names.forEach(name => {
    name += " et au tennis"
    console.log (name)
})