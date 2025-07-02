// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const AddEntryForm = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     date: "",
//     mood: { emoji: "", label: "" },
//     symptoms: [],
//     energy: "",
//     note: "",
//   });

//   const moodOptions = [
//     { emoji: "😃", label: "Happy" },
//     { emoji: "😌", label: "Calm" },
//     { emoji: "😔", label: "Sad" },
//     { emoji: "😡", label: "Angry" },
//     { emoji: "😢", label: "Crying" },
//   ];

//   const symptomOptions = ["Headache", "Fatigue", "Nausea", "Fever", "Cough"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mood") {
//       const [emoji, label] = value.split("|");
//       setFormData((prev) => ({
//         ...prev,
//         mood: { emoji, label },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSymptomChange = (symptom) => {
//     setFormData((prev) => {
//       const isSelected = prev.symptoms.includes(symptom);
//       return {
//         ...prev,
//         symptoms: isSelected
//           ? prev.symptoms.filter((s) => s !== symptom)
//           : [...prev.symptoms, symptom],
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitting Entry:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-6">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-8 rounded-2xl w-full max-w-lg shadow-lg"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center">Add New Entry</h2>

//         {/* Username */}
//         <label className="block text-sm mb-1">Username</label>
//         <input
//           type="text"
//           name="userName"
//           value={formData.userName}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 bg-black border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
//         />

//         {/* Date */}
//         <label className="block text-sm mb-1">Date</label>
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 bg-black border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
//         />

//         {/* Mood */}
//         <label className="block text-sm mb-1">Mood</label>
//         <select
//           name="mood"
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 bg-black border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
//         >
//           <option value="">Select mood</option>
//           {moodOptions.map((m) => (
//             <option key={m.label} value={`${m.emoji}|${m.label}`}>
//               {m.emoji} {m.label}
//             </option>
//           ))}
//         </select>

//         {/* Symptoms */}
//         <label className="block text-sm mb-1">Symptoms</label>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {symptomOptions.map((symptom) => (
//             <span
//               key={symptom}
//               onClick={() => handleSymptomChange(symptom)}
//               className={`px-3 py-1 rounded-full cursor-pointer text-sm ${
//                 formData.symptoms.includes(symptom)
//                   ? "bg-cyan-500 text-black"
//                   : "bg-gray-700 text-white"
//               }`}
//             >
//               {symptom}
//             </span>
//           ))}
//         </div>

//         {/* Energy */}
//         <label className="block text-sm mb-1">Energy Level</label>
//         <select
//           name="energy"
//           value={formData.energy}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 bg-black border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
//         >
//           <option value="">Select energy level</option>
//           <option value="High">🔋 High</option>
//           <option value="Medium">🔋 Medium</option>
//           <option value="Low">🔋 Low</option>
//         </select>

//         {/* Note */}
//         <label className="block text-sm mb-1">Note</label>
//         <textarea
//           name="note"
//           value={formData.note}
//           onChange={handleChange}
//           rows="4"
//           placeholder="Write your thoughts..."
//           className="w-full mb-6 px-4 py-2 bg-black border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
//         ></textarea>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition duration-300"
//         >
//           Save Entry
//         </button>
//       </motion.form>
//     </div>
//   );
// };

// export default AddEntryForm;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const categorizedSymptoms = {
//   Respiratory: ["Cough", "Shortness of Breath", "Sneezing"],
//   Digestive: ["Nausea", "Diarrhea", "Abdominal Pain"],
//   Neurological: ["Headache", "Dizziness", "Blurred Vision"],
//   Psychological: ["Anxiety", "Depression", "Insomnia"],
//   General: ["Fatigue", "Fever", "Body Ache"],
// };

// const moodOptions = [
//   { emoji: "😌", label: "Calm" },
//   { emoji: "😃", label: "Happy" },
//   { emoji: "😔", label: "Sad" },
//   { emoji: "😡", label: "Angry" },
// ];

// const AddEntryForm = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     date: "",
//     mood: "",
//     symptoms: [],
//     energy: "",
//     note: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSymptomToggle = (symptom) => {
//     setFormData((prev) => {
//       const alreadySelected = prev.symptoms.includes(symptom);
//       const updatedSymptoms = alreadySelected
//         ? prev.symptoms.filter((s) => s !== symptom)
//         : [...prev.symptoms, symptom];
//       return { ...prev, symptoms: updatedSymptoms };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Entry:", formData);
//     // Send formData to backend here
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-6 flex justify-center items-center">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-2xl shadow-xl backdrop-blur-md"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6">Add Entry</h2>

//         {/* Username */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Username</label>
//           <input
//             type="text"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             className="w-full bg-black border border-gray-700 px-3 py-2 rounded-md"
//           />
//         </div>

//         {/* Date */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full bg-black border border-gray-700 px-3 py-2 rounded-md"
//           />
//         </div>

//         {/* Mood */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Mood</label>
//           <select
//             name="mood"
//             value={formData.mood}
//             onChange={handleChange}
//             className="w-full bg-black border border-gray-700 px-3 py-2 rounded-md"
//           >
//             <option value="">Select mood</option>
//             {moodOptions.map((m, idx) => (
//               <option key={idx} value={JSON.stringify(m)}>
//                 {m.emoji} {m.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Energy */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1">Energy Level</label>
//           <select
//             name="energy"
//             value={formData.energy}
//             onChange={handleChange}
//             className="w-full bg-black border border-gray-700 px-3 py-2 rounded-md"
//           >
//             <option value="">Select energy</option>
//             <option value="High">High</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
//           </select>
//         </div>

//         {/* Symptoms (Categorized) */}
//         <div className="mb-4">
//           <label className="block text-sm mb-2">Symptoms</label>
//           {Object.entries(categorizedSymptoms).map(([category, symptoms], idx) => (
//             <div key={idx} className="mb-2">
//               <p className="font-semibold text-white/80 mb-1">{category}</p>
//               <div className="flex flex-wrap gap-2">
//                 {symptoms.map((symptom, i) => (
//                   <button
//                     key={i}
//                     type="button"
//                     onClick={() => handleSymptomToggle(symptom)}
//                     className={`px-3 py-1 rounded-full text-sm border transition duration-200 ${
//                       formData.symptoms.includes(symptom)
//                         ? "bg-cyan-500 text-black border-cyan-600"
//                         : "bg-black border-gray-600 text-white"
//                     }`}
//                   >
//                     {symptom}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Note */}
//         <div className="mb-6">
//           <label className="block text-sm mb-1">Note</label>
//           <textarea
//             name="note"
//             value={formData.note}
//             onChange={handleChange}
//             rows="3"
//             className="w-full bg-black border border-gray-700 px-3 py-2 rounded-md"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold transition duration-300"
//         >
//           Add Entry
//         </button>
//       </motion.form>
//     </div>
//   );
// };

// export default AddEntryForm;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { addSymptomApi } from "../api/symptomsApi";
import { redirect ,useNavigate} from "react-router-dom";
const symptomCategories = {
  Respiratory: ["Cough", "Shortness of breath", "Chest pain"],
  Digestive: ["Nausea", "Vomiting", "Diarrhea"],
  Neurological: ["Headache", "Dizziness", "Confusion"],
  General: ["Fatigue", "Fever", "Muscle Pain", "Feeling good today"]
};

const moods = [
  { emoji: "😃", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😠", label: "Angry" }
];

const energies = ["High", "Medium", "Low"];

const AddEntryForm = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    date: "",
    mood: "",
    energy: "",
    symptoms: [],
    note: "",
    normal: false,
  });

  const sendFormData=async()=>{
     const res=await addSymptomApi(formData);
     console.log(res.status);
     if (res.status==201) {
    navigate("/dashboard"); // ✅ this works
     }
     
  }

  const handleSymptomToggle = (symptom) => {
    setFormData((prev) => {
      const symptoms = prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom];
      return { ...prev, symptoms };
    });
  };

  const handleMoodChange = ( label) => {
    setFormData((prev) => ({ ...prev, mood:   label  }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Add Journal Entry</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <input
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
            className="p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          /> */}

          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium">Select Mood</label>
          <div className="flex gap-3 flex-wrap">
            {moods.map(({ emoji, label }) => (
              <button
                type="button"
                key={label}
                onClick={() => handleMoodChange( label)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 text-lg ${
                  formData.mood === label
                    ? "bg-cyan-600 border-cyan-300"
                    : "bg-black border-gray-700"
                }`}
              >
                {emoji} {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium">Energy Level</label>
          <div className="flex gap-3">
            {energies.map((level) => (
              <button
                type="button"
                key={level}
                onClick={() => setFormData({ ...formData, energy: level })}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  formData.energy === level
                    ? "bg-cyan-600 border-cyan-300"
                    : "bg-black border-gray-700"
                }`}
              >
                🔋 {level}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium">Select Symptoms</label>
          {Object.entries(symptomCategories).map(([category, symptoms]) => (
            <div key={category} className="mb-4">
              <h4 className="font-semibold mb-2 text-cyan-300">{category}</h4>
              <div className="flex gap-2 flex-wrap">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom}
                    type="button"
                    onClick={() => handleSymptomToggle(symptom)}
                    className={`px-3 py-1 rounded-full border text-sm ${
                      formData.symptoms.includes(symptom)
                        ? "bg-red-600 border-red-400"
                        : "bg-black border-gray-600"
                    }`}
                  >
                    {symptom}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium">Additional Notes</label>
          <textarea
            rows="4"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>

        

        <button
          onClick={sendFormData}
          type="submit"
          className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 py-2 rounded-md font-semibold text-white transition"
        >
          Add Entry
        </button>
      </motion.form>
    </div>
  );
};

export default AddEntryForm;
