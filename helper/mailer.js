import nodemailer from "nodemailer";
import ejs from "ejs"; // Import EJS for rendering
import path from "path"; // Import path to resolve the template path
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get __dirname equivalent for ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Or any other SMTP service provider
  auth: {
    // user: process.env.EMAIL_USER,
    // pass: process.env.EMAIL_PASS,
    // user: "nasifzeehan1@gmail.com",
    user: "hasansajid121998@gmail.com",
    // pass: "xirikbpviwvvlueu",
    pass: "msshoypurlgmjwvh",
  },
});

// Grooming Enrollment Confirmation Email Function
export const groomingConfirmationEmail = async (
  userEmail,
  userName,
  address,
  programId
) => {
  try {
    const templatePath = join(__dirname, "../helper/emailTemplate.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      programName: "Grooming",
      userName,
      userEmail,
      address,
      programId,
    });

    const mailOptions = {
      // from: "nasifzeehan1@gmail.com",
      from: "hasansajid121998@gmail.com",
      to: userEmail,
      subject: "Grooming Program Confirmation",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Sending email to:", userEmail);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

// Boarding Enrollment Confirmation Email Function
export const boardingConfirmationEmail = async (
  userEmail,
  userName,
  address,
  programId
) => {
  try {
    const templatePath = join(__dirname, "../helper/emailTemplate.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      programName: "Boarding",
      userName,
      userEmail,
      address,
      programId,
    });

    const mailOptions = {
      // from: "nasifzeehan1@gmail.com",
      from: "hasansajid121998@gmail.com",
      to: userEmail,
      subject: "Boarding Program Confirmation",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Sending email to:", userEmail);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

// Boarding Enrollment Confirmation Email Function
export const trainingConfirmationEmail = async (
  userEmail,
  userName,
  address,
  programId
) => {
  try {
    const templatePath = join(__dirname, "../helper/emailTemplate.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      programName: "Training",
      userName,
      userEmail,
      address,
      programId,
    });

    const mailOptions = {
      // from: "nasifzeehan1@gmail.com",
      from: "hasansajid121998@gmail.com",
      to: userEmail,
      subject: "Training Program Confirmation",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Sending email to:", userEmail);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

// Adoption Request Confirmation Email Function
export const sendAdoptionConfirmationEmail = async (
  userEmail,
  adopterName,
  contactEmail,
  contactPhone,
  address,
  experience,
  animalCode,
  animalType
) => {
  try {
    const templatePath = join(__dirname, "../helper/adoptionTemplate.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      adopterName,
      contactEmail,
      contactPhone,
      address,
      experience,
      animalCode,
      animalType,
    });

    const mailOptions = {
      // from: "nasifzeehan1@gmail.com",
      from: "hasansajid121998@gmail.com",
      to: userEmail,
      subject: "Adoption Application Confirmation",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Sending email to:", userEmail);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};
