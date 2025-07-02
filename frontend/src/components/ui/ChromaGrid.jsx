import React, { useContext } from "react";
import { SymptomContext } from "../../context/SymptomContextApi";

const moodEmojiMap = {
  Happy: "😃",
  Sad: "😔",
  Calm: "😌",
  Angry: "😠",
  Stressed: "😣",
  Tired: "😴",
  Excited: "🤩",
  Anxious: "😟",
  Relaxed: "🧘",
  Sick: "🤒",
  // fallback:
  default: "🙂",
};

const EntryCardGrid = () => {
  const { symptoms } = useContext(SymptomContext);

  const getEnergyColor = (energy) => {
    switch (energy) {
      case "High":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Low":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-4 py-10">
      {symptoms.length === 0 ? (
        <p className="text-white">No symptoms found.</p>
      ) : (
        symptoms.map((entry, i) => (
          <div
            key={i}
            className="relative group min-h-[280px] bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-lg p-6 w-[320px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.2)]"
          >
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 blur-xl opacity-0 group-hover:opacity-40 transition duration-300 pointer-events-none z-[-1]" />

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                🗓️ {entry.date || "N/A"}
              </h3>
              <span className="text-base">
                {moodEmojiMap[entry.mood] || moodEmojiMap.default}{" "}
                {entry.mood || "Unknown"}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-base font-medium text-white/80 mb-1">
                Symptoms:
              </p>
              <div className="flex gap-2 flex-wrap">
                {entry.symptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="bg-red-200 text-red-900 px-2 py-1 rounded-full text-sm"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3 text-base text-white/80">
              Energy Level:{" "}
              <span
                className={`font-semibold ${getEnergyColor(entry.energy)}`}
              >
                🔋 {entry.energy}
              </span>
            </div>

            {/* Note */}
            <div className="text-base italic text-white/70 line-clamp-3">
              “{entry.note || "No notes"}”
            </div>

            {/* <div className="flex justify-end mt-6">
              <button className="text-blue-400 text-base hover:underline">
                Edit
              </button>
            </div> */}
          </div>
        ))
      )}
    </div>
  );
};

export default EntryCardGrid;
