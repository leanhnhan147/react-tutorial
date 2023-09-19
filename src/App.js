import { Fragment } from "react";
import "./App.css";
import { GalleryProvider } from "./context/GalleryContext";
import PhotoList from "./components/gallery/PhotoList ";

function App() {
  return (
    <Fragment>
      <GalleryProvider>
        <PhotoList></PhotoList>
      </GalleryProvider>
    </Fragment>
  );
}

export default App;
