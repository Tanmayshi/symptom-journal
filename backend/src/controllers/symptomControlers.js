const asyncHandler = require("../utils/asyncHandlar");
const Symptom = require("../models/symptomModel");

const addSymptom = asyncHandler(async (req, res) => {
  const { date, mood, energy, symptoms, note, normal } = req.body;

  if ([date, mood, energy, note].some((field) => !field || field.trim() === "")) {
    return res.status(400).json({ message: "Please fill all required details" });
  }

  
  const userId = req.user._id;
  const userName = req.user.userName;

  const newEntry = await Symptom.create({
    user: userId,
    userName: userName,
    date,
    mood,
    energy,
    symptoms,
    note,
    normal,
  });

  res.status(201).json({
    success: true,
    data: newEntry,
    message: "Symptom entry added successfully",
  });
});

const getAllSymptomsOfUser=asyncHandler(async (req, res)=>{
     try {
       const userId = req.user._id;
       console.log(userId);
       
       const symptoms = await Symptom.find({ user: userId });
       console.log(symptoms);
       
   res.status(200).json({ success: true, data: symptoms }); 
     } catch (error) {
         res.status(404).json({ success: false, data: error }); 

     }
})
module.exports = { addSymptom ,getAllSymptomsOfUser};
