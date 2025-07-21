import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name Is Required" }),
    lastName: z.string().min(1, { message: "Last Name Is Required" }),
    email: z.string().min(1, { message: "Email Is Required" }).email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 8 characters lon" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password Is Required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and ConfirmPassword does not match",
    path: ["confirmPassword"],
  });

export type registerType = z.infer<typeof registerSchema>;

