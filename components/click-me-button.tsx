"use client";

export default function ClickMeButton() {
  return (
    <button
      onClick={() => alert("Button clicked")}
      className="bg-blue-500 text-white p-2 rounded-md"
    >
      Click Me
    </button>
  );
}
