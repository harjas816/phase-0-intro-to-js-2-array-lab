// Write your solution here!
let cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){ 
    return cats.unshift(name)
}

function destructivelyRemoveFirstCat(a){
    return cats.splice(0,1)
}

function destructivelyRemoveLastCat(a){
    return cats.splice(2,1)
}

function appendCat(a){
    return [...cats, a]
}

function prependCat(a){
    return [a, ...cats]
}

function removeFirstCat(a){
    return cats.slice(1)
}

function removeLastCat(a){
    return cats.slice(0,2)
}