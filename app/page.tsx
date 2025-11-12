import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Christopher Kendrick
      </h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <p className="mb-4">
        {`IT student focused on software and games development, experienced in Agile projects and Unity/Java development.`}
      </p>
        
        <a href="https://ckendrick-mqu.itch.io/counter-knights-arcane-offensive">Counter Knights: Arcane Offensive (Play in your browser)</a><br></br>
        <a href="https://github.com/ckendrick-mqu/COMP1010">Dungeons & Dungeons & Dungeons (Source code only)</a><br></br>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
