import { ModeToggle } from '@/components/ui/mode-toggle';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import Link from 'next/link';

const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/about', text: 'about' },
  { id: nanoid(), href: '/projects', text: 'projects' },
  { id: nanoid(), href: '/contact', text: 'contact' },
];

const Navbar = () => {
  return (
    <nav className=''>
      <div className="align-element flex items-center justify-between px-6 py-4">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} priority />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-4 text-sm font-medium md:space-x-12 md:text-2xl">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <Link
                  key={id}
                  href={href}
                  className="uppercase hover:font-bold duration-300 md:tracking-wide"
                >
                  {text}
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
