import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Check, Shield, Zap } from 'lucide-react';

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 bg-background border-b">
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Simplify Your Workflow <br className="hidden sm:inline" />
                <span className="text-muted-foreground">
                  Focus on what matters.
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A clean, professional, and powerful platform for managing your
                acquisitions efficiently. No distractions, just results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="px-8 text-base">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="px-8 text-base">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/40">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4">
                <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Fast & Efficient</h3>
                <p className="text-muted-foreground">
                  Built for speed using the latest technologies to ensure zero
                  latency in your workflow.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Secure by Default</h3>
                <p className="text-muted-foreground">
                  Your data is protected with enterprise-grade security and
                  robust authentication protocols.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Intuitive Design</h3>
                <p className="text-muted-foreground">
                  A clean, distraction-free interface designed for professionals
                  who value clarity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 w-full border-t">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Acquisitions Inc. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link className="hover:text-foreground transition-colors" to="#">
              Terms
            </Link>
            <Link className="hover:text-foreground transition-colors" to="#">
              Privacy
            </Link>
            <Link className="hover:text-foreground transition-colors" to="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
