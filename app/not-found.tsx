'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import MouseTrail from '@/components/MouseTrail';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <MouseTrail />
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-[150px] md:text-[200px] font-extrabold leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                404
              </span>
            </h1>
          </div>

          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/"
              className="group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-lg border-2 border-slate-700 hover:border-cyan-500 text-white font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-12 border-t border-slate-800">
            <p className="text-slate-400 mb-6">You might be looking for:</p>
            <div className="flex gap-4 justify-center flex-wrap text-sm">
              <Link 
                href="/about"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                About
              </Link>
              <Link 
                href="/projects"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Projects
              </Link>
              <Link 
                href="/skills"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Skills
              </Link>
              <Link 
                href="/contact"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
