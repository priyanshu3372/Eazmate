import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from './theme/ThemeProvider';
import { SmoothScrollProvider } from './components/common/SmoothScrollProvider';
import { MouseSpotlight } from './components/common/MouseSpotlight';

function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <MouseSpotlight />
        <RouterProvider router={router} />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

export default App;

