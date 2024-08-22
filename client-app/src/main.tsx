import { StrictMode } from 'react';
import { router } from './app/routes/routes';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
