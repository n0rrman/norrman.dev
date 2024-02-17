"use server";

import { z } from "zod";


const submitContactSchema = z.object({
    content: z.string().min(3),
});


interface SubmitContactFormState {
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
        _form?: string[];
    };
    success?: boolean;
}

export async function submitContactFormState(formState: SubmitContactFormState, formData: FormData): Promise<SubmitContactFormState> {

    console.log(formData)
    const result = submitContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        topic: formData.get("topic"),
    });

    return {
        errors: {
            _form: ["Ths is an error"]
        }
    }

}

    // if (typeof title !== 'string' || title.length <3) {
    //     return {
    //         message: 'Title must be longer'
    //     }
    // }
 