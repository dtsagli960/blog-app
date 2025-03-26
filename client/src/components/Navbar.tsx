import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-red-500 sticky top-0 z-50 w-full border-b  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left side - Brand/Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">BlogApp</span>
          </Link>
        </div>

        {/* Right side - Navigation items */}
        <div className="flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {!isAuthenticated ? (
                <>
                  <NavigationMenuItem>
                    <Button variant="ghost" asChild>
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button asChild variant={"outline"}>
                      <Link to="/login">Log In</Link>
                    </Button>
                  </NavigationMenuItem>
                </>
              ) : (
                <>
                  <NavigationMenuItem>
                    <Button variant="ghost" asChild>
                      <Link to="/create-post">New Post</Link>
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button
                      variant="outline"
                      onClick={() => {
                        logout();
                        window.location.href = "/";
                      }}
                    >
                      Log Out
                    </Button>
                  </NavigationMenuItem>
                </>
              )}
              {/* <NavigationMenuItem>
                <ModeToggle /> 
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}