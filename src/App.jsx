import { Route, Routes } from 'react-router';

import HomePage from './components/HomePage/HomePage';
import SignInPage from './components/SignInPage/SignInPage';
import ContactTypesPage from './components/ContactTypesPage/ContactTypesPage';
import ContactTypePage from './components/ContactTypesPage/ContactTypePage/ContactTypePage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import ContactPage from './components/ContactsPage/ContactPage/ContactPage';
import Error404Page from './components/Error404Page/Error404Page';
import './const/env.css';
import './const/global.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/contact-types" element={<ContactTypesPage />} />
      <Route path="/contact-types/:id" element={<ContactTypePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/contacts/:id" element={<ContactPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default App;
