import { z } from 'zod';

export const createCateScheme = z.object({
    name: z.string(),
    age: z.number(),
    breed: z.string()
}).required();

export type CreateCatDto = z.infer<typeof createCateScheme>

export type CatDto = z.infer<typeof createCateScheme & { id?: number }>
