'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const user = true;
  const email = true;
  const router = useRouter();
  const handleNavigate = () => {
    if(user && email){
      router.push('/dashboard');
    }else{
      router.push('/');
    }
  }
  
    return (
        <nav className="flex justify-center py-8 bg-slate-900/20">
          <ul className="flex justify-between w-1/3">
            <li>
              <Link href="/" className='cursor-pointer py-2 px-8 hover:bg-slate-900/30 rounded-md transition block'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className='cursor-pointer py-2 px-8 hover:bg-slate-900/30 rounded-md transition block'>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className='cursor-pointer py-2 px-8 hover:bg-slate-900/30 rounded-md transition block'>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className='cursor-pointer py-2 px-8 hover:bg-slate-900/30 rounded-md transition block'>
                Contact Us
              </Link>
            </li>
            <li>
              <button type='button' onClick={handleNavigate} className='cursor-pointer py-2 px-8 hover:bg-slate-900/30 rounded-md transition block'>
                Dashboard
              </button>
            </li>
          </ul>
        </nav>
    );
};

export default Navbar;