"use client";

import { useMemo, useState } from "react";
import TaskCard, { TaskCardModel } from "@/components/tasks/TaskCard";
import Fab from "@/components/app/Fab";

const initialTasks: TaskCardModel[] = [
  { id: "1", name: "Kitchen wipe-down", emoji: "🧽", lastDoneText: "Last done: yesterday by Alex", turn: "your" },
  { id: "2", name: "Take out trash", emoji: "🗑️", lastDoneText: "Last done: 2 days ago by you", turn: "their" },
  { id: "3", name: "Dishwasher unload", emoji: "🍽️", lastDoneText: "Last done: today by Jamie", turn: "your" },
  { id: "4", name: "Bathroom quick clean", emoji: "🧻", lastDoneText: "Last done: 4 days ago by Alex", turn: "their" },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskCardModel[]>(initialTasks);

  function handleComplete(id: string) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, turn: "their", lastDoneText: "Last done: just now by you" } : t
      )
    );
  }

  const sorted = useMemo(() => {
    const rank = (t: TaskCardModel) => (t.turn === "your" ? 0 : 1);
    return [...tasks].sort((a, b) => {
      const r = rank(a) - rank(b);
      if (r !== 0) return r;
      return a.name.localeCompare(b.name);
    });
  }, [tasks]);

  return (
    <>
      <div className="mb-4">
        <div className="text-sm font-semibold text-[#B8C3E6]">Your quests</div>
        <div className="mt-1 text-xs text-[#7C88B3]">
          Tap <span className="font-semibold text-[#EAF0FF]">I did it</span> to pass the turn (wireframe behavior).
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {sorted.map((t) => (
          <TaskCard key={t.id} task={t} onComplete={handleComplete} />
        ))}
      </div>

      <Fab />
    </>
  );
}