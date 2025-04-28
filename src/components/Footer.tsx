
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-xl font-bold hover-border-effect px-3 py-1 rounded-md inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Pavan Kumar
              </span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Pavan Kumar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
