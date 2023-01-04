import { DefaultTags } from '#/ui/DefaultTags';

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>RG2</title>
      <meta
        name="description"
        content="apps using nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}
