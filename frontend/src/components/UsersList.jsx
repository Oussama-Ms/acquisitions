import { useState, useEffect } from 'react';
import api from '../services/api';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            // Backend returns { users: [], count: ... }
            setUsers(response.data.users || []);
        } catch (error) {
            console.error("Fetch Users Error:", error);
            toast.error('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this user?')) return;
        try {
            await api.delete(`/users/${id}`);
            toast.success('User deleted');
            setUsers(users.filter((u) => u.id !== id));
        } catch (error) {
            console.error("Delete User Error:", error);
            toast.error('Failed to delete user');
        }
    };

    if (loading) return <div className="p-4 text-sm text-muted-foreground">Loading users...</div>;

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm h-full">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">All Users</h3>
                <p className="text-sm text-muted-foreground">Manage all registered users.</p>
            </div>
            <div className="p-0">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Role</th>
                                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {users.map((user) => (
                                <tr key={user.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle font-mono text-xs">{user.id}</td>
                                    <td className="p-4 align-middle font-medium">{user.name}</td>
                                    <td className="p-4 align-middle text-muted-foreground">{user.email}</td>
                                    <td className="p-4 align-middle">
                                        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${user.role === 'admin' ? 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80' : 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                                            {user.role}
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle text-right">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleDelete(user.id)}
                                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
