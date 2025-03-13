import {z} from 'zod';

export const passwordSchema = z.string().min(4, {message: 'Введите корректный пароль'});

export const formLoginSchema = z.object({
    email: z.string().email({message: 'Введите корректную почту'}),
    password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
    .merge(
        z.object({
            fullName: z.string().min(2, {message: 'Введите имя и фамилию'}),
            confirmPassword: passwordSchema,
        }),
    )
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
    });

export const formUpdateUserDataSchema =
    z.object({
        email: z.string().email({message: 'Введите корректную почту'}),
        fullName: z.string().min(2, {message: 'Введите имя и фамилию'}),
        password: z.string().refine(val => val === '' || val.length >= 4, {
            message: 'String must contain at least 4 character(s)',
        }).optional(),
        confirmPassword: z.string().refine(val => val === '' || val.length >= 4, {
            message: 'String must contain at least 4 character(s)',
        }).optional(),
    })
        .refine((data) => {
            if (data.password || data.confirmPassword) {
                return data.password === data.confirmPassword;
            }
            return true;
        }, {
            message: 'The passwords do not match',
            path: ['confirmPassword'],
        });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
export type TFormUpdateUserValues = z.infer<typeof formUpdateUserDataSchema>;