import { z } from 'zod';

/////////////////////////////////////////
// NOTE SCHEMA
/////////////////////////////////////////

export const NoteSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  body: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
})

export type Note = z.infer<typeof NoteSchema>

/////////////////////////////////////////
// NOTE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const NoteOptionalDefaultsSchema = NoteSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type NoteOptionalDefaults = z.infer<typeof NoteOptionalDefaultsSchema>

export default NoteSchema;
