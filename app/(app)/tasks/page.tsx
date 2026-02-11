"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Frequency, TurnState } from "@/components/tasks/TasksStore";
import { useTasks } from "@/components/tasks/TasksStore";

const freqOptions: { value: Frequency; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "as-needed", label: "As needed" },
];

export default function NewTaskPage() {
  const router = useRouter();
  const { addTask } = useTasks();

  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("🧽");
  const [frequency, setFrequency] = useState<Frequency>("weekly");
  const [turn, setTurn] = useState<TurnState>("your");

  const canCreate = name.trim().length > 0;

  function create() {
    if (!canCreate) return;
    addTask({
      name: name.trim(),
      emoji,
      frequency,
      turn,
    });
    router.replace("/tasks");
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#101B2E]/80 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
      <div className="text-sm font-semibold text-[#B8C3E6]">New task</div>
      <div className="mt-1 text-lg font-semibold">Forge a quest</div>

      <div className="mt-4 space-y-3">
        <label className="block">
          <div className="text-xs font-semibold text-[#B8C3E6]">Task name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Vacuum living room"
            className="mt-1 w-full rounded-2xl border border-white/10 bg-[#0B1220]/35 px-3 py-3 text-sm text-[#EAF0FF] placeholder:text-[#7C88B3] outline-none focus:ring-1 focus:ring-[#FF7A18]/40"
          />
        </label>

        <label className="block">
          <div className="text-xs font-semibold text-[#B8C3E6]">Emoji</div>
          <input
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-white/10 bg-[#0B1220]/35 px-3 py-3 text-sm text-[#EAF0FF] outline-none focus:ring-1 focus:ring-[#FF7A18]/40"
          />
          <div className="mt-1 text-xs text-[#7C88B3]">Tip: paste an emoji like 🧺 🍽️ 🧹</div>
        </label>

        <div>
          <div className="text-xs font-semibold text-[#B8C3E6]">Frequency</div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {freqOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFrequency(opt.value)}
                className={[
                  "rounded-2xl border border-white/10 px-3 py-2 text-xs font-bold",
                  frequency === opt.value
                    ? "bg-[#152744] text-[#EAF0FF]"
                    : "bg-[#0B1220]/25 text-[#B8C3E6] hover:bg-[#0B1220]/35",
                ].join(" ")}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-[#B8C3E6]">Who starts?</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setTurn("your")}
              className={[
                "rounded-2xl border border-white/10 px-3 py-2 text-xs font-bold",
                turn === "your"
                  ? "bg-gradient-to-b from-[#FFC34D] to-[#E3A82B] text-[#2A1606]"
                  : "bg-[#0B1220]/25 text-[#B8C3E6] hover:bg-[#0B1220]/35",
              ].join(" ")}
            >
              You
            </button>
            <button
              type="button"
              onClick={() => setTurn("their")}
              className={[
                "rounded-2xl border border-white/10 px-3 py-2 text-xs font-bold",
                turn === "their"
                  ? "bg-[#152744] text-[#EAF0FF]"
                  : "bg-[#0B1220]/25 text-[#B8C3E6] hover:bg-[#0B1220]/35",
              ].join(" ")}
            >
              Someone else
            </button>
          </div>
        </div>

        <button
          onClick={create}
          disabled={!canCreate}
          className={[
            "mt-2 w-full rounded-2xl border border-white/10 px-4 py-3 text-sm font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
            canCreate
              ? "bg-gradient-to-b from-[#FF7A18] to-[#E65F0B] text-[#1A0E05] active:translate-y-[1px]"
              : "bg-[#152744]/40 text-[#7C88B3] cursor-not-allowed",
          ].join(" ")}
        >
          Forge task
        </button>

        <button
          onClick={() => router.back()}
          className="w-full rounded-2xl border border-white/10 bg-[#0B1220]/25 px-4 py-3 text-sm font-bold text-[#B8C3E6] hover:bg-[#0B1220]/35"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}