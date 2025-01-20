import { createBrowserRouter } from 'react-router';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/login/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import MailRoute from './MailRoute';
import MailPage from '../pages/mail/MailPage.js';

const root = createBrowserRouter([
  {
    path: '',
    element: <LoginPage />,
  },
  {
    path: 'main',
    element: <ProtectedRoute />,
    children: [{ path: '/main', element: <MainPage /> }],
  },
  {
    path: 'mail',
    element: <ProtectedRoute />,
    children: [{ path: '/mail', element: <MailPage />, children: MailRoute() }],
  },
]);
export default root;
