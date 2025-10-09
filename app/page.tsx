import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I made game.`}
      </p>
        <a href="https://ckendrick-mqu.itch.io/counter-knights-arcane-offensive">game go brrr</a>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
