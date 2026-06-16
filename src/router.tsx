import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ConstructionServicesMarketplace } from './pages/ConstructionServicesMarketplace';
import { Education } from './pages/Education';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { NotFound } from './pages/NotFound';
import { Portfolio } from './pages/Portfolio';
import { ProjectCaseStudy } from './pages/ProjectCaseStudy';
import { Skills } from './pages/Skills';
import { TattooWorkMarketplace } from './pages/TattooWorkMarketplace';
import { Volunteering } from './pages/Volunteering';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'journey', element: <Journey /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'volunteering', element: <Volunteering /> },
      { path: 'education', element: <Education /> },
      { path: 'portfolio', element: <Portfolio /> },
      {
        path: 'portfolio/construction-services-marketplace',
        element: <ConstructionServicesMarketplace />,
      },
      { path: 'portfolio/tattoo-work-marketplace', element: <TattooWorkMarketplace /> },
      { path: 'projects/:slug', element: <ProjectCaseStudy /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
