import { getPage } from '@/services/strapi';
import { RenderBlocks } from '@/components';
import { notFound } from 'next/navigation';

export default async function Page() {

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  
  console.log("BASE URL:", baseUrl);
  console.log("FETCH URL:", `${baseUrl}/graphql`);

  const page = await getPage("inicio");

  if (!page) return notFound();

  return (
    <main>
        <RenderBlocks blocks={page.body} />
    </main>
  );
}