export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length == 2)
    return (
      <div>
        viewing docs for Feature-{params.slug[0]} Concept-{params.slug[1]}
      </div>
    );
  else if (params.slug?.length == 1)
    return <div>viewing docs for Feature-{params.slug[0]}</div>;
  return <div>My Docs {JSON.stringify(params)} </div>;
}
