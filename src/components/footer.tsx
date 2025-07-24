
import Link from 'next/link';
import { Logo } from './logo';
import { Linkedin, Instagram } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-1.001z" />
    </svg>
  );

export function Footer() {
  const whatsappNumber = '917982215080';
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in ProBhasha's courses.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="w-full bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-muted-foreground font-body text-sm">
              Unlock your potential with professional English communication skills.
            </p>
          </div>
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <Link href="/#courses" className="text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground">
              Testimonials
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Legal</h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/probhasha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-6 w-6" />
              </Link>
               <Link href="https://www.instagram.com/probhasha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <WhatsAppIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ProBhasha. All rights reserved.
      </div>
    </footer>
  );
}
