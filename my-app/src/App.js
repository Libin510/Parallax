import Imageslider from "./Components/Imageslider";
import Scrolling from "./Components/Scrolling";

function App() {
  const images = [
    "https://w7.pngwing.com/pngs/680/813/png-transparent-nebula-atmosphere-sky-nebula-space-astronomy-space-miscellaneous-purple-texture.png",
    "https://faithingeeks.files.wordpress.com/2012/02/earth_night.jpg",
    "https://www.rmg.co.uk/sites/default/files/styles/large/public/OM29130307950_A%20Titanium%20Moon%20%C2%A9%20Miguel%20Claro.jpg?itok=NhYvof8k",
  ];
  return (
    <div>
      <Imageslider images={images} />

      <div>
        <Scrolling />
      </div>
    </div>
  );
}

export default App;
