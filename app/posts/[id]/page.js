export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Post ${id} - My Blog`,
    description: `Read Post ${id} on My Blog.`,
  };
}

export default async function Post({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Post {id} - My Blog</h1>
      <p>This is post number {id}.</p>
    </div>
  );
}