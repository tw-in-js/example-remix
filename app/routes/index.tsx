const anchorClass = "transition opacity-75 hover:(opacity-100 text-emerald-500)"

export default function Index() {
  const links = [
    {
      href: "https://remix.run/tutorials/blog",
      text: "15m Quickstart Blog Tutorial",
    },
    {
      href: "https://remix.run/tutorials/jokes",
      text: "Deep Dive Jokes App Tutorial",
    },
    {
      href: "https://remix.run/docs",
      text: "Remix Docs",
    },
    {
      href: "https://twind.dev/",
      text: "Twind Docs",
    },
  ]

  return (
    <main className="py-16 px-4 max-w-screen-md mx-auto w-full">
      <h1 className="text-4xl font-light mb-6">Welcome to Remix</h1>
      <ul className="list-disc grid gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={anchorClass}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
