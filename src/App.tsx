import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styles from "./App.module.css";
import { Container } from 'react-bootstrap';
import NotFound from './components/pages/NotFound';
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import Appointment from './components/pages/Appointment';
import Store from './components/pages/Store';
import Contact from "./components/pages/Contact";
import Review from "./components/pages/Review";
function App() {
  return (
    <BrowserRouter>
      <Container fluid className={styles.container}>
        <Routes>
          <Route path='/*' element={<Main />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/review" element={<Review />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}