const alert = (element) => window.alert(element)

const myEach = function (collection, callback){
    let arr = collection;
    if(!Array.isArray(collection)){
        arr = Object.values(collection)
    }
    for (let element in arr){
        callback(arr[element])
    }
    return collection
}


const multiply = (element) =>element * element

const myMap = function (collection, callback){
    let arr = collection;
    let result = []
    if(!Array.isArray(collection)){
        arr = Object.values(collection)
    }
    for (let element in arr){
        result.push(callback(arr[element]))
    }
    return result
}


const myReduce = (collection, callback, acc) => {

    let arr = collection;
    if(!Array.isArray(collection)){
        arr = Object.values(collection)
    }
    if (!acc) {
        acc = arr[0]
        arr = arr.slice(1)
}
    for (let element in arr){
        acc = callback(acc, arr[element], collection)
    }

    return acc
}

const myFind = function(collection, predicate) {
    let arr = collection;
    if(!Array.isArray(collection)){
        arr = Object.values(collection)
    }
    for(let element in arr){
       if(predicate(arr[element])) {
           return arr[element]
       }
    }
}


const myFilter = function(collection, predicate){
    let arr = collection;
    let result = []
    if(!Array.isArray(collection)){
        arr = Object.values(collection)
    }
    for(let element in arr){
       if(predicate(arr[element])) {
           result.push(arr[element]) 
       }
    }
    return result
}

const mySize = function(collection) {
    let arr = collection;
    if(!Array.isArray(collection)){
        arr = Object.values(collection)
    }
    return arr.length
}

const myFirst = function(arr, int){
    return (int) ? arr.slice(0, int) : arr[0];
}

const myLast = function(arr, int) {
    return (int) ? arr.slice(arr.length - int) : arr[arr.length - 1];
}

const myKeys = function(object) {
    let keys = []
    for (let key in object){
      keys.push(key)
    }
    return keys;
  }
  
  const myValues = function(object) {
    const values = []
    for (let key in object){
      values.push(object[key])
    }
    return values;
  
  }