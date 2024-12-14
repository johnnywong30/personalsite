import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Aperture } from "lucide-react";

function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link to="/" className="flex items-center">
            <Aperture />
            <span className="sr-only">Johnny Wong</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              to="/"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Home
            </Link>
            {/* TODO: navigation menu for experience, skills, education */}
            <Link
              to="/about"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Hobbies
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
