import PageMeta from '../components/PageMeta'

export default function DataSafety() {
  return (
    <>
      <PageMeta title="Data Safety" description="Aqoonmaal Data Safety – what we collect and how we handle it, aligned with Google Play." />
      <article className="prose prose-gray max-w-none prose-headings:scroll-mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Safety</h1>
        <p className="text-gray-600 mb-8">This page describes our data practices in line with Google Play Data safety requirements.</p>

        <section>
          <h2>Data we collect</h2>

          <h3 className="text-lg font-semibold mt-6">Personal info</h3>
          <ul>
            <li><strong>Name, email, optional phone number.</strong> Used for account creation, profile, and (for phone) contact in class chat. Name and optional phone may be visible to classmates in the same class. Not sold.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">App activity</h3>
          <ul>
            <li><strong>Lesson progress</strong> (status, progress_seconds, completed_at). Used to track your learning. Not shared with third parties. Not sold.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">User-generated content</h3>
          <ul>
            <li><strong>Chat messages</strong> (text and images). Used for class group chat. Visible to users in the same class. Not sold.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">Financial info</h3>
          <ul>
            <li><strong>Payment amount, currency, provider, transaction reference</strong> (mobile money). Used for subscription and payment processing. Shared only with the payment provider. Not sold.</li>
          </ul>
        </section>

        <section>
          <h2>Data handling</h2>
          <ul>
            <li><strong>Encryption in transit:</strong> All data is transmitted over HTTPS.</li>
            <li><strong>Passwords:</strong> Stored in hashed form; we never store plain-text passwords.</li>
            <li><strong>Storage:</strong> Data is stored in Supabase (region as applicable, e.g. EU/US).</li>
          </ul>
        </section>

        <section>
          <h2>Your choices</h2>
          <ul>
            <li>You can edit your profile (including optional phone number) in the app.</li>
            <li>You can request account and data deletion (see our <a href="/delete-account" className="text-indigo-600 hover:underline">Delete Account</a> page).</li>
            <li>Phone number is optional; you choose whether to provide it for class chat.</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about data safety: <a href="mailto:support@aqoonmaal.com" className="text-indigo-600 hover:underline">support@aqoonmaal.com</a>.
          </p>
        </section>
      </article>
    </>
  )
}
