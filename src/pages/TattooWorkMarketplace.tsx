import { MarketplaceCaseStudyPage } from './MarketplaceCaseStudyPage';
import { getMarketplaceCaseStudyBySlug } from '../data/marketplaceCaseStudies';

export function TattooWorkMarketplace() {
  const project = getMarketplaceCaseStudyBySlug('tattoo-work-marketplace');

  if (!project) {
    throw new Error('Tattoo Work Marketplace case study data is missing.');
  }

  return <MarketplaceCaseStudyPage project={project} />;
}
