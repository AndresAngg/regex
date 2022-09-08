import { useState } from "react";

function App() {
  const [fileValue, setFileValue] = useState();

  const fileReader = (e) => {
    const arch = e.target.files[0]
    if (!arch) return;
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
  const filter = async () => {
    const regex = /[^a-z|A-Z](moto)[^r]/g;
    Object.keys(fileValue).map(key => {
      if (regex.test(fileValue[key])) {
        console.log(fileValue[key].replaceAll(';', '  '))
      }
    })
  }

  return (
    <div>
      <h2>Pruebas</h2>
      <h2>{fileValue}</h2>
      <input
        type="file"
        multiple={false}
        onChange={fileReader}
      />
      <br />
      <br />
      <button variant="contained" color="primary" onClick={filter}>Filtrar</button>

    </div>

  );
}
export default App;
