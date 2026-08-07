export function GithubActivity() {
  return (
    <section className="animate-fade-in-up mt-4 pt-10 pb-16 border-t border-neutral-800">
      <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
        <span className="text-accent accent-glow mr-2">*</span> github activity
      </h2>
      <div className="overflow-x-auto rounded border border-neutral-800 bg-white p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/216e39/arka6fx"
          alt="arka6fx's GitHub contribution graph"
          className="min-w-[640px]"
        />
      </div>
    </section>
  )
}
