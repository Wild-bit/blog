import { db } from "../db.js";
import bcrypt from "bcrypt";
export const register = (req, res) => {
  // CHECK EXISTING USER 检查用户是否存在
  const q = `SELECT * FROM users WHERE email = ? OR username = ?`;
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    console.log(data, "data");
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("邮箱已被注册");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("注册成功！");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
