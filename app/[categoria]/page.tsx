import { notFound } from "next/navigation";
import { getPage } from "@/services/strapi";
import { RenderBlocks } from "@/components";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params;

  const page = await getPage(categoria);

  if (!page) return notFound();

  if(page.categoria) return notFound();

  return (
    <main>
      <RenderBlocks blocks={page.body} />
    </main>
  );
}