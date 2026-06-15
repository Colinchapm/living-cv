import { MarketplaceCaseStudyPage } from './MarketplaceCaseStudyPage';
import { getMarketplaceCaseStudyBySlug } from '../data/marketplaceCaseStudies';

export function ConstructionServicesMarketplace() {
  const project = getMarketplaceCaseStudyBySlug('construction-services-marketplace');

  if (!project) {
    throw new Error('Construction Services Marketplace case study data is missing.');
  }

  return <MarketplaceCaseStudyPage project={project} />;
}
