import { CTASection, HeroBanner, SolutionsSection, Testimonials, EducationHeroSection, BenefitsSolutions} from '@/components';

const componentMap = {
  ComponentSectionsHeroBannerSection: HeroBanner,
  ComponentSectionsSolucoes: SolutionsSection,
  ComponentSectionsDepoimentos: Testimonials,
  ComponentSectionsCta: CTASection,
  ComponentSectionsEducacaoHero: EducationHeroSection,
  ComponentSectionsBeneficiosSecao: BenefitsSolutions
};

export function RenderBlocks({ blocks }: { blocks: any[] }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    const Component = componentMap[block.__typename];

    if (!Component) return null;

    return <Component key={index} {...block} />;
  });
}