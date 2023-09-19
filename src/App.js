import { Fragment } from "react";
import "./App.css";
import { GalleryProvider } from "./context/GalleryContext";
import PhotoList from "./components/gallery/PhotoList ";
import CartList from "./components/gallery/CartList ";

function App() {
  return (
    <Fragment>
      <GalleryProvider>
        <PhotoList></PhotoList>
        <CartList></CartList>
      </GalleryProvider>
    </Fragment>
  );
}

export default App;
