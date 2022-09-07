
// const file = require('./data.txt')
import {file} from './data.txt'

var raw = ""
const rows = []


const fileReader = () => {
    fetch(file)
        .then(r => r.text())
        .then(text => { 
            console.log(text)
            raw = text
         });
    // const fileReader = new FileReader()
    // fileReader.readAsText(file);
    // fileReader.onload = () => {
    //     raw = fileReader.result
    // }
}

const filter = () => {
    const registro = raw.split('\n')
    const regex = /(moto)/mg;
    registro.forEach(da => {

        if (regex.test(da)) {
            var dato = da.split(';')
            rows.push(createAccidente(dato[0], dato[1], dato[2], dato[3]))
        } else {
            return
        }
    })
    rows.forEach(data => {
        console.log(data)
    })
    // registro.forEach(element => {


    // });
}
fileReader()
filter()