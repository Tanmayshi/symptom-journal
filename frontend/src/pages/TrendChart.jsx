
import React, { useEffect, useRef, useState, useContext } from "react";
import Chart from "chart.js/auto";
import { SymptomContext } from "../context/SymptomContextApi";

const TrendChart = () => {
  const { symptoms } = useContext(SymptomContext);
  const chartRef = useRef(null);
  const [symptomData, setSymptomData] = useState([]);
  const [activeSymptom, setActiveSymptom] = useState(null);

  useEffect(() => {
    if (!symptoms || symptoms.length === 0) return;

    const frequencyMap = {};
    symptoms.forEach((entry) => {
      entry.symptoms.forEach((sym) => {
        frequencyMap[sym] = (frequencyMap[sym] || 0) + 1;
      });
    });

    const formatted = Object.entries(frequencyMap).map(([symptom, count]) => ({
      symptom,
      count,
    }));

    setSymptomData(formatted);
  }, [symptoms]);

  useEffect(() => {
    if (symptomData.length === 0) return;
    const ctx = chartRef.current.getContext("2d");

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: symptomData.map((d) => d.symptom),
        datasets: [
          {
            label: "Symptom Occurrence",
            data: symptomData.map((d) => d.count),
            backgroundColor: symptomData.map((d) =>
              activeSymptom === d.symptom
                ? "rgba(0, 255, 255, 1)"
                : "rgba(0, 255, 255, 0.5)"
            ),
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { precision: 0 },
          },
        },
      },
    });

    return () => chartInstance.destroy();
  }, [symptomData, activeSymptom]);

  return (
    <div className="p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen text-white font-sans">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10 drop-shadow-md">
        📊 Symptom Trends Overview
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Chart Card */}
        <div className="flex-1 bg-[#0f172a] border border-cyan-500/20 rounded-2xl shadow-[0_0_25px_#0891b2] p-6">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Bar Graph View
          </h3>
          <div className="w-full h-[400px]">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* Symptoms List Card */}
        <div className="w-full md:w-1/3 bg-[#1e293b] border border-white/10 rounded-2xl shadow-inner p-6 overflow-auto max-h-[500px]">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">
            🦠 Symptom Frequency
          </h3>
          <ul className="space-y-2">
            {symptomData.map(({ symptom }) => (
              <li key={symptom}>
                <button
                  onClick={() => setActiveSymptom(symptom)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    activeSymptom === symptom
                      ? "bg-cyan-600 text-white shadow-lg"
                      : "bg-slate-800 text-cyan-300 hover:bg-cyan-800 hover:text-white"
                  }`}
                >
                  {symptom}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendChart;
