import express from "express";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";
import users from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

app.use("/api/users", users);

// Error Handling
app.use(errorHandler);
app.use(notFound);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
