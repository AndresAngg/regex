import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
    const regex = /(moto)/g;
    Object.keys(fileValue).map(key => {
      if (regex.test(fileValue[key])) {
        console.log(fileValue[key].replaceAll(';', '  '))
      }
    })
  }

  return (
    <Container fixed>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}>
        <h2>Taller</h2>
        <input
          type="file"
          multiple={false}
          onChange={fileReader}
        />
        <br />
        <br />
        <Button variant="outlined" onClick={filter}>Filtrar</Button>
      </Box>
    </Container>

  );
}
export default App;
