import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import  Layout  from './Layout'

const HomePage = lazy(() => import('../pages/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts.jsx'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}