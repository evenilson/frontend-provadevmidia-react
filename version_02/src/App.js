import { BrowserRouter, Route } from 'react-router-dom'

import './styles/global.css'

import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
