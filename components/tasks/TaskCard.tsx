"use client";

import type { TaskModel } from "@/components/tasks/TasksStore";

function badgeStyles(turn: TaskModel["turn"]) {
  return turn === "your"
    ? "bg-gradient-to-b from-[#FFC34D] to-[#E3A82B] text-[#2A1606]"
    : "bg-[#152744]/70 text-[#B8C3E6]";
}

function freqLabel(f: TaskModel["frequency"]) {
  if (f === "daily") return "Daily";
  if (f === "weekly") return "Weekly";
  return "As needed";
}

export default function TaskCard({
  task,
  onComplete,
}: {
  task: TaskModel;
  onComplete: (id: string) => void;
}) {
  const isYourTurn = task.turn === "your";

  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-[#101B2E]/80 p-4",
        "shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
        isYourTurn ? "ring-1 ring-[#FF7A18]/35" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#152744]/60 text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {task.emoji}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="truncate text-base font-semibold">{task.name}</div>
            <span className="rounded-full border border-white/10 bg-[#0B1220]/35 px-2 py-0.5 text-[11px] font-semibold text-[#B8C3E6]">
              {freqLabel(task.frequency)}
            </span>
          </div>

          <div className="mt-1 text-xs text-[#7C88B3]">Last done: {task.lastDoneText}</div>

          <div className="mt-3 flex items-center justify-between">
            <span
              className={[
                "rounded-full border border-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide",
                badgeStyles(task.turn),
              ].join(" ")}
            >
              {isYourTurn ? "Your Turn" : "Their Turn"}
            </span>

            {isYourTurn ? (
              <span className="text-xs font-semibold text-[#FF8F3D]">
                Ready to forge
              </span>
            ) : (
              <span className="text-xs text-[#7C88B3]">Waiting…</span>
            )}
          </div>
        </div>
      </div>

      {isYourTurn && (
        <button
          onClick={() => onComplete(task.id)}
          className="mt-4 w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#FF7A18] to-[#E65F0B] px-4 py-3 text-sm font-extrabold text-[#1A0E05] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] active:translate-y-[1px]"
        >
          I did it
        </button>
      )}
    </div>
  );
}