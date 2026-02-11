"use client";

import { useMemo } from "react";
import TaskCard from "@/components/tasks/TaskCard";
import Fab from "@/components/app/Fab";
import { useTasks } from "@/components/tasks/TasksStore";

export default function TasksPage() {
  const { tasks, completeTask } = useTasks();

  const sorted = useMemo(() => {
    const rank = (t: typeof tasks[number]) => (t.turn === "your" ? 0 : 1);
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
          Tap <span className="font-semibold text-[#EAF0FF]">I did it</span> to pass the turn (mock behavior).
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {sorted.map((t) => (
          <TaskCard key={t.id} task={t} onComplete={completeTask} />
        ))}
      </div>

      <Fab />
    </>
  );
}