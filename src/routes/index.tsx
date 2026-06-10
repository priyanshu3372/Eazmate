import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { LandingPage } from '../pages/LandingPage';
import { QuotationPage } from '../pages/QuotationPage';
import { SecurityPage } from '../pages/SecurityPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'get-quotation',
        element: <QuotationPage />,
      },
      {
        path: 'security',
        element: <SecurityPage />,
      },
    ],
  },
]);
