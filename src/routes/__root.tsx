import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Aperture, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";

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

function MobileNavigationMenu() {
  return (
    <NavigationMenu className="sm:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent focus:bg-transparent">
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-32 gap-3 p-2 grid-cols-1 bg-blue-100">
              {navigationRoutes.map((n, i) => (
                <ListItem key={`mobile-nav-${i}`} title={n.name} href={n.to} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-300 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <MobileNavigationMenu />
          <Link to="/" className="flex items-center">
            <Aperture />
            <span className="sr-only">Johnny Wong</span>
          </Link>
          <nav className="hidden sm:flex gap-4">
            {navigationRoutes.map((n, i) => (
              <Link
                to={n.to}
                className="font-medium flex items-center text-sm transition-colors hover:text-blue-100"
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
