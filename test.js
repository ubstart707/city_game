const fs = require('fs')
const path = require('path')

const filename = 'cities.txt'
const fileContent = fs.readFileSync(path.join(__dirname, filename)).toString()

/**
 * @var {string[]} cities
 */
const cities = fileContent.split("\n").map(city => city.replace(/\s+/g, "")).map(city => city.toLowerCase())
// console.log(cities.splice(0, cities.length - 30))

let input = process.stdin
input.setEncoding('utf-8')


let city_arrey = cities
let random_number = Math.floor(Math.random() * 3300);
let random_city = city_arrey[random_number]
let ifirst_char = random_city[random_city.length -1] //masalan bu a

console.log("This a game CITY , let i start first\n" + random_city)
console.log(ifirst_char)



function enter(){
    let data = document.getElementById("writed").value;
    alert("salom sen "+ data + " so'zini kiritding")
    user_wrote(data)
}




function user_wrote(name_c){
    const found = city_arrey.find(city => city === name_c.replace(/\s+/g, "").toLowerCase())
    
    if(found && ifirst_char == found[0]){
    
        console.log('okey you found')
        city_arrey = city_arrey.filter(city => city !== found)
        const last_char = found[found.length - 1]
        const ifound = city_arrey.find(el => el.startsWith(last_char))
        if (ifound){
            console.log(ifound)
            ifirst_char = ifound[ifound.length - 1] //masalan bu b 
        } else {
            console.log("you win")
        }
        
    } else {
        console.log('You lost hahahahahahah')
    } 
}


input.on('data', function(data){
    if (data === "exit\n") {
        process.exit()
    } else if (data === 'clear\n') {
        console.clear()
    } else {
        user_wrote(data)
    }
})
