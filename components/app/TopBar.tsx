export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/5 bg-[#0B1220]/80 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#101B2E] text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            ⚒️
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Tasks</div>
            <div className="text-xs text-[#B8C3E6]">HomeForge</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101B2E] px-3 py-1 text-xs text-[#B8C3E6] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span className="inline-block h-2 w-2 rounded-full bg-[#39D98A]" />
          Synced
        </div>
      </div>
    </header>
  );
}