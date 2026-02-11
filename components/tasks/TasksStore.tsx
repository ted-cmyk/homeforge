"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type TurnState = "your" | "their";
export type Frequency = "daily" | "weekly" | "as-needed";

export type TaskModel = {
  id: string;
  name: string;
  emoji: string;
  frequency: Frequency;
  lastDoneText: string;
  turn: TurnState;
};

type TasksContextValue = {
  tasks: TaskModel[];
  addTask: (t: Omit<TaskModel, "id" | "lastDoneText">) => void;
  completeTask: (id: string) => void;
};

const TasksContext = createContext<TasksContextValue | null>(null);

const initialTasks: TaskModel[] = [
  { id: "1", name: "Kitchen wipe-down", emoji: "🧽", frequency: "daily", lastDoneText: "Yesterday • Alex", turn: "your" },
  { id: "2", name: "Take out trash", emoji: "🗑️", frequency: "weekly", lastDoneText: "2 days ago • You", turn: "their" },
  { id: "3", name: "Dishwasher unload", emoji: "🍽️", frequency: "daily", lastDoneText: "Today • Jamie", turn: "your" },
  { id: "4", name: "Bathroom quick clean", emoji: "🧻", frequency: "weekly", lastDoneText: "4 days ago • Alex", turn: "their" },
];

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<TaskModel[]>(initialTasks);

  const value = useMemo<TasksContextValue>(() => {
    return {
      tasks,
      addTask: (t) => {
        setTasks((prev) => [
          {
            id: makeId(),
            ...t,
            lastDoneText: "Not done yet",
          },
          ...prev,
        ]);
      },
      completeTask: (id) => {
        setTasks((prev) =>
          prev.map((t) =>
            t.id === id
              ? { ...t, turn: "their", lastDoneText: "Just now • You" }
              : t
          )
        );
      },
    };
  }, [tasks]);

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasks must be used within TasksProvider");
  return ctx;
}