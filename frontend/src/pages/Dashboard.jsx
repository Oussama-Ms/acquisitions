import { useAuth } from '../context/AuthContext';
import ProfileForm from '../components/ProfileForm';
import UsersList from '../components/UsersList';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background/50">
      <main className="flex-1 p-6 md:p-10 container mx-auto space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold leading-none tracking-tight">
                      {user?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">User ID</span>
                    <span className="font-mono text-xs">{user?.id}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Role</span>
                    <span className="capitalize">{user?.role}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Member Since</span>
                    <span>
                      {new Date(
                        user?.createdAt || Date.now()
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ProfileForm />
          </div>

          {user?.role === 'admin' && (
            <div className="md:col-span-2 lg:col-span-5">
              <UsersList />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
