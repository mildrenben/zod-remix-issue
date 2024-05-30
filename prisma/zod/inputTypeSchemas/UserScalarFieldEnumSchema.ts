import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
