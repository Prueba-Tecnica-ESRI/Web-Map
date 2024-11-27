import { useEffect, useState } from 'react'
import './App.css'
import { ArcgisMap } from '@arcgis/map-components-react';
import "@arcgis/map-components/dist/components/arcgis-map";
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

function App() {

  const [isDefault, setIsDefault] = useState(true);
  const [base, setBase] = useState(null);
  const [text, setText] = useState("Street");


  function changeParams(){

    if(isDefault){
      setBase("streets");
      setText("Default");
      setIsDefault(false);
      
    } else {
      setBase(null);
      setText("Street");
      setIsDefault(true);
    }
  }

  return (
    <>
      <h1>ESRI Map</h1>
      {isDefault ? <ArcgisMap center={"-74.05124, 4.67369"} zoom={20}></ArcgisMap>
      : <ArcgisMap center={"-74.05124, 4.67369"} zoom={20} basemap={"streets"}></ArcgisMap>}
      <br></br>
      <button onClick={()=>{changeParams()}}>Change to {text} view</button>     
    </>
  )
}
export default App