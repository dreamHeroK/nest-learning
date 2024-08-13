import { z } from 'zod';

export const createCateScheme = z.object({
    name: z.string(),
    age: z.number(),
    breed: z.string()
}).required();

export type CreateCatDto = z.infer<typeof createCateScheme>

export const Cat = createCateScheme.merge(z.object({ id: z.number() }));
export type Cat = z.infer<typeof Cat>

export type CatDto = z.infer<typeof createCateScheme & { id?: number }>
