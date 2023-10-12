require("dotenv").config();
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3000;
(async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");
    const app = require("./server");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
