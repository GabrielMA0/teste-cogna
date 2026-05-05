import { notFound } from "next/navigation";
import { getPageCategory, getPage } from "@/services/strapi";
import { RenderBlocks } from "@/components";

export default async function SlugPage({
  params
}: {
  params: Promise<{ slug: string, categoria: string }>
}) {
  const { categoria, slug } = await params;

  const page = await getPageCategory(categoria);

  console.log("Page data:", page); // Debugging line
  console.log(categoria, slug); // Debugging line

  if (!page) return notFound();

  return (
    <main>
      <RenderBlocks blocks={page.body} />
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPage(params.slug);

  return {
    title: page?.seo?.title ?? "Default title",
    description: page?.seo?.description ?? "Default description",

    openGraph: {
      title: page?.seo?.title,
      description: page?.seo?.description,
      images: page?.seo?.ogImage?.url
        ? [{ url: page.seo.ogImage.url }]
        : [],
    },
  };
}