import { UserProfile } from '@/generated/prisma';
 
import prisma from '@/lib/prisma';
 
export async function retrieveUserProfileFromDatabaseByEmail(
  email: UserProfile['email'],
) {
  return await prisma.userProfile.findUnique({ where: { email } });
}
