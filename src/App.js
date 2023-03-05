import { Route, Routes } from "react-router-dom";
import { HomePage } from "./component/HomePage";
import { Navbar } from "./component/Navbar";
import MoviePage from "./component/pages/MoviePage";
import { TvPage } from "./component/pages/TvPage";
import { DetailPage } from "./component/pages/DetailPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/:mediaType/:mediaId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
