import { retrieveUserProfileFromDatabaseByEmail } from '@/features/user-profile/user-profile-model';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
 
export default async function Dashboard() {
  const user =
    await retrieveUserProfileFromDatabaseByEmail('jan@reactsquad.io');
 
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
 
      <CardContent>
        {user ? (
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        ) : (
          <p>User not found.</p>
        )}
      </CardContent>
    </Card>
  );
}
