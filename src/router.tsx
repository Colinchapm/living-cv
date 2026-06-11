import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Education } from './pages/Education';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Portfolio } from './pages/Portfolio';
import { ProjectCaseStudy } from './pages/ProjectCaseStudy';
import { Skills } from './pages/Skills';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'education', element: <Education /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'projects/:slug', element: <ProjectCaseStudy /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
