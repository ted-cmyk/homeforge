"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Tab({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex-1 rounded-2xl px-3 py-2 text-center text-sm font-semibold transition",
        isActive
          ? "bg-[#152744] text-[#EAF0FF] border border-white/10"
          : "text-[#B8C3E6] hover:bg-[#101B2E] hover:text-[#EAF0FF]",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function BottomTabs() {
  const pathname = usePathname();
  const onTasks = pathname.startsWith("/tasks");
  const onHousehold = pathname.startsWith("/household");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-[#0B1220]/80 backdrop-blur">
      <div className="mx-auto max-w-md px-4 py-3">
        <div className="flex gap-2 rounded-2xl bg-[#101B2E]/70 p-2 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
          <Tab href="/tasks" label="Tasks" isActive={onTasks} />
          <Tab href="/household" label="Household" isActive={onHousehold} />
        </div>
      </div>
    </nav>
  );
}