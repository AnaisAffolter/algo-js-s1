let a = "Jean"
let b = "Paul"
let result = checkName (a,b)

function checkName(firstUserName, secondUserName) {
    if (firstUserName === secondUserName) {
        return true
    } else {
        return false
    }
}

console.log(result)