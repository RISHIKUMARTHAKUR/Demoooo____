import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image
        src="/ProBhashaLogo.png" // Assuming you saved your new logo as /public/new-logo.png
        alt="ProBhasha Logo"
        width={200} 
        height={50}
        className="h-auto"
      />
    </Link>
  );
}
