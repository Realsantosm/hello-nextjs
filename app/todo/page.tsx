"use client";

import { useState } from "react";
import { Todo } from "@/components/Todo";
import Timer from "@/components/Timer"; // Import the Timer component

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: crypto.randomUUID(),
          text: input.trim(),
          completed: false,
          createdAt: new Date(),
        },
      ]);
      setInput("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-[orangered]">
          ✨ My Tasks ✨
        </h1>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="✍️ Add a new task..."
              className="flex-1 px-4 py-2 border-2 border-purple-200 rounded-lg text-gray-800 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Add 📝
            </button>
          </div>
        </form>

        {/* Stats */}
        <div className="flex justify-between mb-6 text-sm text-gray-600">
          <span>🎯 Tasks remaining: {activeTodos.length}</span>
          <span>✅ Completed: {completedTodos.length}</span>
        </div>

        {/* Toggle View */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShowCompleted(false)}
            className={`px-4 py-2 rounded-lg ${
              !showCompleted
                ? "bg-purple-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Active 📋
          </button>
          <button
            onClick={() => setShowCompleted(true)}
            className={`px-4 py-2 rounded-lg ${
              showCompleted
                ? "bg-purple-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Completed 🎉
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {(showCompleted ? completedTodos : activeTodos).map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-2 p-3 text-gray-400 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 accent-purple-500"
              />
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No tasks yet! Add one above 🚀
          </div>
        )}

        {/* Pomodoro Timer Section */}
        <div className="mt-8 border-t pt-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-[orangered]">
            ⏰ Pomodoro Timer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-center mb-2 text-gray-600">Short Break</h3>
              <Timer defaultMinutes={10} />
            </div>
            <div>
              <h3 className="text-center mb-2 text-gray-600">Medium Break</h3>
              <Timer defaultMinutes={15} />
            </div>
            <div>
              <h3 className="text-center mb-2 text-gray-600">Long Break</h3>
              <Timer defaultMinutes={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}