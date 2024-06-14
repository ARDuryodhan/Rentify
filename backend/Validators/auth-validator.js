const z = require("zod");

//registrations//
const singupSchema = z.object({
  firstname: z
    .string({ required_error: "First Name is required" })
    .trim()
    .min(2, { message: "Mobile number should be at least 10 digits" })
    .max(100, { message: "Mobile number should not exceed 12 digits" }),
  lastname: z
    .string({ required_error: "Last Name is required" })
    .trim()
    .min(2, { message: "Mobile number should be at least 10 digits" })
    .max(100, { message: "Mobile number should not exceed 12 digits" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ required_error: "Invalid email address" }),
  mobile: z
    .string({ required_error: "Mobile number is required" })
    .trim()
    .min(10, { message: "Mobile number should be at least 10 digits" })
    .max(12, { message: "Mobile number should not exceed 12 digits" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Password can't be more than 1024 characters" }),
});

//Login//

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ required_error: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Password can't be more than 1024 characters" }),
});



module.exports = { singupSchema, loginSchema };
