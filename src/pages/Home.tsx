import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function Home() {
  return (
    <>
      <PageMeta title="Aqoonmaal" description="Aqoonmaal – Education app for Somali students. Privacy, Terms, Data Safety, and Contact." />
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Aqoonmaal
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Education app for Somali students in Class 8, Form 1, Form 2, Form 3, and Form 4. 
          Video lessons, progress tracking, class group chat, and subscription-based access.
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link to="/privacy" className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">
            Privacy Policy
          </Link>
          <Link to="/terms" className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
            Terms of Service
          </Link>
          <Link to="/data-safety" className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
            Data Safety
          </Link>
          <Link to="/delete-account" className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
            Delete Account
          </Link>
          <Link to="/contact" className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
            Contact
          </Link>
        </nav>
      </div>
    </>
  )
}
