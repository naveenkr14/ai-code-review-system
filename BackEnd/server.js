require("dotenv").config();
// console.log(process.env.GOOGLE_GEMINI_API_KEY);

const app = require("./src/app");

app.listen(3000, () => {
  console.log("Server is running on the http://localhost:3000");
});
