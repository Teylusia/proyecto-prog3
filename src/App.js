import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Artists from "./components/Artists/Artists";
import Albums from "./components/Albums/Albums";
import Tracks from "./components/Tracks/Tracks";
import AlbumDetail from "./components/AlbumDetail/AlbumDetail";
import TrackDetail from "./components/TrackDetail/TrackDetail";
import Favourites from "./components/Favourites/Favourites";
import NotFound from "./components/NotFound/NotFound";

import './App.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Artistas" exact={true} component={Artists} />
          <Route path="/Albums" exact={true} component={Albums} />
          <Route path="/Tracks" exact={true} component={Tracks} />
          <Route path="/album/:id" exact={true} component={AlbumDetail} />
          <Route path="/track/:id" exact={true} component={TrackDetail} />
          <Route path="/Favourites" exact={true} component={Favourites} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
