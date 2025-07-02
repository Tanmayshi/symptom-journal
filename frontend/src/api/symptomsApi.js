import axios from "axios"

export const addSymptomApi=async(data)=>{
   try {
         const symptom=await axios.post("api/v1/symptom/addSymptom",data);
         return symptom;
   } catch (error) {
        return error;
   }
}

