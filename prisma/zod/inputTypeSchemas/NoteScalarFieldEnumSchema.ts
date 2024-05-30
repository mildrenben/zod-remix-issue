import { z } from 'zod';

export const NoteScalarFieldEnumSchema = z.enum(['id','title','body','createdAt','updatedAt','userId']);

export default NoteScalarFieldEnumSchema;
