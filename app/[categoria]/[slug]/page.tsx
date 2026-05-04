import { notFound } from "next/navigation";
import { getPage } from "@/services/strapi";
import { RenderBlocks } from "@/components";

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string, categoria: string }>
}) {
  const { categoria, slug } = await params;

  const page = await getPage(slug, categoria);

  if (!page) return notFound();

  return (
    <main>
      <RenderBlocks blocks={page.body} />
    </main>
  );
}