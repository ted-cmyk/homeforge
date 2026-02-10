import Link from "next/link";

export default function Fab() {
  return (
    <Link
      href="/tasks/new"
      className="fixed bottom-24 right-4 z-20 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-b from-[#FF7A18] to-[#E65F0B] text-2xl font-black text-[#1A0E05] shadow-[0_20px_40px_rgba(0,0,0,0.45)] active:translate-y-[1px]"
      aria-label="Create new task"
      title="New task"
    >
      +
    </Link>
  );
}