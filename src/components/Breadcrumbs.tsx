import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  
    const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    
    if (path === '/') {
      return [{ label: 'Início', path: '/' }];
    }
    
    if (path === '/services') {
      return [
        { label: 'Início', path: '/' },
        { label: 'Serviços', path: '/services' }
      ];
    }

    if (path === '/precos') {
      return [
        { label: 'Início', path: '/' },
        { label: 'Preços', path: '/precos' }
      ];
    }
    
    return [{ label: 'Início', path: '/' }];
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-muted/50 py-4 border-b" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index === 0 && <Home className="w-4 h-4 mr-2 text-muted-foreground" />}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link 
                    to={crumb.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;