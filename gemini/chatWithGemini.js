// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
const API_KEY = "AIzaSyDh0F7ECopGWkMDJxnUaCi9T2TSDZ3hXD0";

const genAI = new GoogleGenerativeAI(API_KEY);

// async function chatWithGemini(userMessage) {
//   try {
//     // const response = await axios.post(
//     //   `${API_URL}?key=${API_KEY}`,
//     //   {
//     //     contents: [
//     //       {
//     //         parts: [
//     //           {
//     //             text: userMessage,
//     //           },
//     //         ],
//     //       },
//     //     ],
//     //   },
//     //   {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //   }
//     // );
//     const response = await axios.post(
//       apiUrl,
//       {
//         prompt: "Explain how AI works",
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Extract the response data
//     const responseData = response.data;

//     // Extract the 'text' from the 'parts' in the response content
//     const responseText =
//       responseData.candidates[0]?.content?.parts[0]?.text || "";
//     console.log(responseText);
//     return responseText;
//   } catch (error) {
//     console.error(
//       "Error:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// }

const fetchResponse = async (userQuery) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(userQuery);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (err) {
    console.log("gemini found error:", err);
  }
};

export { fetchResponse };
