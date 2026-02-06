import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function Contact() {
  return (
    <>
      <PageMeta title="Contact" description="Contact Aqoonmaal for support, privacy requests, account deletion, or refunds." />
      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact</h1>
        <p className="text-gray-600 mb-8">We're here to help.</p>

        <section>
          <p>
            For <strong>privacy requests</strong>, <strong>account deletion</strong>, <strong>refunds</strong>, or <strong>general support</strong>, contact us at:
          </p>
          <p className="text-lg">
            <a href="mailto:ismailbulbul381@gmail.com" className="text-indigo-600 hover:underline font-medium">ismailbulbul381@gmail.com</a>
          </p>
          <p className="text-gray-600 mt-4">
            We aim to respond within a few business days. For account deletion requests, we will process them within 30 days as described on our <Link to="/delete-account" className="text-indigo-600 hover:underline">Delete Account</Link> page.
          </p>
        </section>

        <section>
          <h2>Download the app</h2>
          <p>
            Get Aqoonmaal on the <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Play Store</a> (link to your app listing when available).
          </p>
        </section>
      </article>
    </>
  )
}
