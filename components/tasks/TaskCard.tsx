type TurnState = "your" | "their";

export type TaskCardModel = {
  id: string;
  name: string;
  emoji: string;
  lastDoneText: string;
  turn: TurnState;
};

function Badge({ turn }: { turn: TurnState }) {
  if (turn === "your") {
    return (
      <span className="rounded-full border border-white/10 bg-gradient-to-b from-[#FFC34D] to-[#E3A82B] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#2A1606]">
        Your Turn
      </span>
    );
  }
  return (
    <span className="rounded-full border border-white/10 bg-[#152744]/70 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#B8C3E6]">
      Their Turn
    </span>
  );
}

export default function TaskCard({
  task,
  onComplete,
}: {
  task: TaskCardModel;
  onComplete: (id: string) => void;
}) {
  const isYourTurn = task.turn === "your";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#101B2E]/80 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#152744]/60 text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {task.emoji}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-base font-semibold">{task.name}</div>
          <div className="mt-1 text-xs text-[#7C88B3]">{task.lastDoneText}</div>
        </div>

        <Badge turn={task.turn} />
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