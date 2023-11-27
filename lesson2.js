let arr1 = []

arr1[0] = parseInt('2005', 10)
arr1[1] = 17
arr1[2] = "Назар"
arr1[3] = null
arr1[4] = undefined

let User_ME =
{
    name_u : arr1[2],
    age : arr1[1],
    yearBorn : arr1[0]
}

console.table({arr1})
console.table({User_ME})