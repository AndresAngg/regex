import './App.css';
import { useState } from "react";
import { Button } from '@material-ui/core'

function App() {
  const [fileValue, setFileValue] = useState();
  const [rs, setRs] = useState([]);

  function createAccidente(fecha, placa, nV, comentario) {
    return { fecha, placa, nV, comentario };
  }
  var roow = []
  const fileReader = (e) => {
    const arch = e.target.files[0]
    const fileR = new FileReader();
    fileR.readAsText(arch)
    fileR.onload = () => {
      var format = fileR.result.split('\n');
      setFileValue(format)
    }
    fileR.onerror = () => {
      console.log(fileR.error)
    }
  }
  const filter = () => {
    const regex = /[^a-z|A-Z](moto)[^r]/g;
    Object.keys(fileValue).map(key => {
      if (regex.test(fileValue[key])) {
        var doc = document.getElementById('res')
        console.log(typeof fileValue[key], fileValue[key])
        setRs(rs)
        // doc.innerHTML += <div> <h1></h1><br /> </div>
      }
      // setRs(fileValue[key].replaceAll(';', "     "))

    }
    )
  }

  return (
    <div className="App">
      <h2>Pruebas</h2>
      <h2>{fileValue}</h2>
      <input
        type="file"
        multiple={false}
        onChange={fileReader}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={filter}>Filtrar</Button>
      <div id="res">{rs}</div>
      <textarea id=""></textarea>

    </div>

  );
}
export default App;
