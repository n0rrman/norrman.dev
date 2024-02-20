"use server";

import { z } from "zod";

import sendEmail from "@/emails/resend";
import * as errors from "@/error-messages";


const submitContactSchema = z.object({
    name: z.string()
        .min(3, { message: errors.INPUT_TOO_SHORT })
        .max(40, { message: errors.INPUT_TOO_LONG }),
    email: z.string()
        .email({ message: errors.INPUT_NOT_EMAIL })
        .min(5, { message: errors.INPUT_TOO_SHORT })
        .max(40, { message: errors.INPUT_TOO_LONG }),
    message: z.string()
        .min(10, { message: errors.INPUT_TOO_SHORT })
        .max(4000, { message: errors.INPUT_TOO_LONG }),
    topic: z.string()
        .min(3, { message: errors.INPUT_TOO_SHORT })
        .max(40, { message: errors.INPUT_TOO_LONG }),
    language: z.string()
        .min(3, { message: errors.INPUT_TOO_SHORT })
        .max(40, { message: errors.INPUT_TOO_LONG }),
});


interface SubmitContactFormState {
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
        topic?: string[];
        _form?: string[];
    };
    success?: boolean;

}


export async function submitContactFormState(formState: SubmitContactFormState, formData: FormData): Promise<SubmitContactFormState> {


    const result = submitContactSchema.safeParse({
        name : formData.get("name"),
        email : formData.get("email"),
        message: formData.get("message"),
        topic : formData.get("topic"),
        language : formData.get("language"),
    });
    
    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const send = formData.get("submit");
    if (send === "true") {
        const { name, email, message, topic, language} = result.data;
        sendEmail(topic, name, email, message, language)
    }

    return {
        errors: {},
        success: true,
      };
}
 