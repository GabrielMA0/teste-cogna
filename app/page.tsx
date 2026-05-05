import { getPage } from '@/services/strapi';
import { RenderBlocks } from '@/components';
import { notFound } from 'next/navigation';

export default async function Page() {

  const page = await getPage("inicio");

  if (!page) return notFound();

  return (
    <main>
        <RenderBlocks blocks={page.body} />
    </main>
  );
}