import routes from './routes.json';

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
};

export const siteRoutes = routes as SiteRoute[];

export function getRouteMeta(path: string) {
  return siteRoutes.find((route) => route.path === path);
}
