import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 允许 http://example.com 跨域访问
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 允许的请求方法
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 允许的请求头

  // 支持带凭证（例如Cookies）的请求
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    // 预检请求的响应，确认是否允许实际请求方法
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// 启动 Express 服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
