//Dependencies
const Base_64 = require("base-64")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

var Self = {}
Self.results = ""
Self.matrix = ""
Self.spacer = `/**${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}${Math.floor(Math.random() * 999999999)}*/`
Self.message = "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
Self.space_amount = 250
Self.decoy1_maybe_amount = 50

//Functions
Self.anti_1 = function(){
    var results = ""

    for( i2 = 0; i2 <= Self.decoy1_maybe_amount; i2++ ){
        results += `/**${Self.message}*/`
    }

    return results
}

Self.anti_2 = function(){
    var results = ""

    for( i3 = 0; i3 <= Self.space_amount; i3++ ){
        results += ` `
    }

    return results
}

//Main
if(!Self_Args.length){
    console.log("node index.js <input> <output>")
    process.exit()
}

if(!Self_Args[0]){
    console.log("Invalid input.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid output.")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("Invalid input.")
    process.exit()
}

const input_data = Fs.readFileSync(Self_Args[0], "utf8").split("\n")

if(!input_data){
    console.log("Input data is empty.")
    process.exit()
}

for( i in input_data ){
    Self.matrix += `${Self.anti_2()}${Self.spacer}${Self.anti_1()}${Self.anti_2()}` + "${Base_64.decode(" + `'${Base_64.encode(input_data[i])}'` +")}" + `${Self.anti_1()}${Self.anti_2()}\n`
}

const random_numbers = Math.floor(Math.random() * 999999999)

Self.results = `const Base_64 = require("base-64")\n`
Self.results += `a${random_numbers} = ` + "`" + Self.matrix + "`\n"
Self.results += `eval(a${random_numbers})`

Fs.writeFileSync(Self_Args[1], Self.results, "utf8")
