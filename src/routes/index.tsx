import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { LandingPage } from '../pages/LandingPage';
import { QuotationPage } from '../pages/QuotationPage';
import { SecurityPage } from '../pages/SecurityPage';
import { PlatformPage } from '../pages/PlatformPage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { IndustriesPage } from '../pages/IndustriesPage';
import { IntegrationsPage } from '../pages/IntegrationsPage';
import { ContactPage } from '../pages/ContactPage';

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
        path: 'platform',
        element: <PlatformPage />,
      },
      {
        path: 'solutions',
        element: <SolutionsPage />,
      },
      {
        path: 'industries',
        element: <IndustriesPage />,
      },
      {
        path: 'integrations',
        element: <IntegrationsPage />,
      },
      {
        path: 'security',
        element: <SecurityPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'get-quotation',
        element: <QuotationPage />,
      },
    ],
  },
]);
