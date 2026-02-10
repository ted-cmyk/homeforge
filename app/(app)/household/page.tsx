// app/(app)/household/page.tsx
"use client";

import { useState } from "react";
import MemberRow from "@/components/household/MemberRow";

const mockHousehold = {
  name: "Forge Flats",
  inviteCode: "ANVIL7K",
};

const mockMembers = [
  { id: "1", name: "You", color: "#FF7A18", subtitle: "Joined first" },
  { id: "2", name: "Alex", color: "#39D98A", subtitle: "Joined second" },
  { id: "3", name: "Jamie", color: "#FFC34D", subtitle: "Joined third" },
];

export default function HouseholdPage() {
  const [copied, setCopied] = useState(false);

  async function copyInvite() {
    try {
      await navigator.clipboard.writeText(mockHousehold.inviteCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard may fail in some browser contexts; ignore for wireframe
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Household card */}
      <section className="rounded-2xl border border-white/10 bg-[#101B2E]/80 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
        <div className="text-sm font-semibold text-[#B8C3E6]">Household</div>
        <div className="mt-1 text-lg font-semibold">{mockHousehold.name}</div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-[#152744]/45 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="text-xs font-semibold text-[#B8C3E6]">Invite code</div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="rounded-xl border border-white/10 bg-[#0B1220]/50 px-3 py-2 text-base font-extrabold tracking-widest text-[#EAF0FF]">
              {mockHousehold.inviteCode}
            </div>
            <button
              onClick={copyInvite}
              className="rounded-2xl border border-white/10 bg-[#0B1220]/40 px-4 py-2 text-sm font-bold text-[#EAF0FF] hover:bg-[#0B1220]/55 active:translate-y-[1px]"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="mt-2 text-xs text-[#7C88B3]">
            Share this with your roommates to join your household.
          </div>
        </div>
      </section>

      {/* Members card */}
      <section className="rounded-2xl border border-white/10 bg-[#101B2E]/80 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-[#B8C3E6]">Members</div>
          <div className="text-xs text-[#7C88B3]">Round-robin: join order</div>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {mockMembers.map((m) => (
            <MemberRow
              key={m.id}
              member={{ id: m.id, name: m.name, color: m.color, subtitle: m.subtitle }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}