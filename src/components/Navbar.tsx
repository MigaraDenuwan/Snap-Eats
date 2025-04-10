import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-yellow-500">Snap Eats</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">Restaurants</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">Deals</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">Partner with us</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">About</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                <SignInButton>
                  <button className="px-4 py-2 rounded text-gray-700 hover:text-yellow-500 font-medium flex items-center">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton />
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:text-yellow-500">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium">Restaurants</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium">Deals</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium">Partner with us</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 font-medium">About</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-3">
              {!isSignedIn ? (
                <>
                  <SignInButton>
                    <button className="px-4 py-2 rounded text-gray-700 hover:text-yellow-500 font-medium flex items-center">
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition">
                      Sign Up
                    </button>
                  </SignUpButton>
                </>
              ) : (
                <UserButton />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
