
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="glass p-10 rounded-xl max-w-md w-full text-center">
        <h1 className="text-7xl font-bold text-primary mb-6">404</h1>
        <p className="text-2xl font-medium mb-4">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="btn btn-primary inline-flex items-center justify-center"
        >
          <Home size={18} className="mr-2" /> Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
