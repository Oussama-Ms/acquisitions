import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="w-full flex h-16 items-center px-6 md:px-8">
                <div className="flex gap-8 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight">
                            Acquisitions
                        </span>
                    </Link>
                    {user && (
                        <nav className="hidden md:flex gap-6">
                            <Link
                                to="/dashboard"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Dashboard
                            </Link>
                        </nav>
                    )}
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center gap-2">
                        <ModeToggle />
                        {user ? (
                            <Button variant="outline" onClick={logout}>
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="ghost">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button>
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
