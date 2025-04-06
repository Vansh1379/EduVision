import {z} from "zod";

const signupvalidation = z.object({
    name: z.string(),
    email: z.string().email(),
    phone_no: z.string().regex(/^\d{10}$/),
    password: z.string().min(3),
})