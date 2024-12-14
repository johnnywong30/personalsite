import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Aperture } from "lucide-react";

type NavigationRoute = {
  to: string;
  name: string;
  children?: NavigationRoute[];
};

const navigationRoutes: NavigationRoute[] = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/",
    name: "Projects",
  },
  {
    to: "/",
    name: "Hobbies",
  },
  {
    to: "/",
    name: "Contact Me",
  },
];

function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-300 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link to="/" className="flex items-center">
            <Aperture />
            <span className="sr-only">Johnny Wong</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            {navigationRoutes.map((n, i) => (
              <Link
                to={n.to}
                className="font-medium flex items-center text-sm transition-colors hover:text-gray-100"
                key={`nav-link-${i}`}
              >
                {n.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}

export const Route = createRootRoute({
  component: () => (
    <div className="bg-blue-100 min-h-svh">
      <Navigation />
      <div className="w-full h-full">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
