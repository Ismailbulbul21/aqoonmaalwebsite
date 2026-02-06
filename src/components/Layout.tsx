import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-2">
          <Link to="/" className="text-xl font-bold text-indigo-700 hover:text-indigo-800">
            Aqoonmaal
          </Link>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-gray-600">
            <li><Link to="/privacy" className="hover:text-indigo-600">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-600">Terms</Link></li>
            <li><Link to="/data-safety" className="hover:text-indigo-600">Data Safety</Link></li>
            <li><Link to="/delete-account" className="hover:text-indigo-600">Delete Account</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 bg-white mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Aqoonmaal. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-indigo-600">Privacy</Link>
            <Link to="/terms" className="hover:text-indigo-600">Terms</Link>
            <Link to="/data-safety" className="hover:text-indigo-600">Data Safety</Link>
            <Link to="/delete-account" className="hover:text-indigo-600">Delete Account</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
