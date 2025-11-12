import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Christopher Kendrick
      </h1>
      <p className="mb-4">
        {`IT student focused on software and games development, experienced in Agile projects and Unity/Java development.`}
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <p className="mb-4">
        {`My projects can be found in the below blog posts.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
