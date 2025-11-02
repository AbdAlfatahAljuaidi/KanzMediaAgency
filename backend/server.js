const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const sendData = require("./utils/sendEmail");
const saveEmailData = require("./model/emailModel");
require("dotenv").config();

app.use(express.json());
app.use(cors({
  origin: process.env.ORIGIN || "*"
}));

app.post("/api/send", async (req, res) => {
  try {
    const { name, phone, email, businessType, Brief, contentType, Package } = req.body;

    if (!name || !phone || !email || !businessType || !Brief || !contentType || !Package) {
      return res.status(400).json({ error: true, message: "يرجى إدخال جميع البيانات" });
    }

    // 💾 حفظ البيانات في قاعدة البيانات
    await saveEmailData.create({
      name,
      phone,
      email,
      businessType,
      Brief,
      contentType,
      Package,
    });

    const CompanyEmail = "kanzmediaagency@gmail.com";

    await sendData(
      CompanyEmail,
      name,
      phone,
      email,
      businessType,
      Brief,
      contentType,
      Package,
      "New Client Request",
      "send"
    );

    return res.status(200).json({ error: false, message: "تم إرسال الإيميل بنجاح ✅" });
  } catch (error) {
    console.error("❌ Error in /api/send:", error);
    return res.status(500).json({ error: true, message: "Internal server error" });
  }
});

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server ready to take off on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });
