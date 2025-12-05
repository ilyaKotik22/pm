import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
  name: z.string().min(2, "Имя слишком короткое"),
});

export type RegisterData = z.infer<typeof RegisterSchema>;
