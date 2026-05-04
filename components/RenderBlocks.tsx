import { CTASection, HeroBanner, SolutionsSection, Testimonials, EducationHeroSection, BenefitsSolutions} from '@/components';


type ComponentKey = keyof typeof componentMap;

type Block = {
  __typename: ComponentKey;
  [key: string]: any;
};

const componentMap: Record<string, React.ComponentType<any>>  = {
  ComponentSectionsHeroBannerSection: HeroBanner,
  ComponentSectionsSolucoes: SolutionsSection,
  ComponentSectionsDepoimentos: Testimonials,
  ComponentSectionsCta: CTASection,
  ComponentSectionsEducacaoHero: EducationHeroSection,
  ComponentSectionsBeneficiosSecao: BenefitsSolutions
};

export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    const Component = componentMap[block.__typename];

    if (!Component) return null;

    return <Component key={index} {...block} />;
  });
}