import PageMeta from '../components/PageMeta'

export default function DeleteAccount() {
  return (
    <>
      <PageMeta title="Delete Account & Data" description="How to delete your Aqoonmaal account and associated data." />
      <article className="prose prose-gray max-w-none prose-headings:scroll-mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete Account & Data</h1>
        <p className="text-gray-600 mb-8">You can permanently delete your Aqoonmaal account and associated data.</p>

        <section>
          <h2>What happens when you delete your account</h2>
          <p>Deleting your account permanently removes:</p>
          <ul>
            <li>Your account (email, password)</li>
            <li>Your profile (name, class, phone number)</li>
            <li>Your progress data</li>
            <li>Chat messages you sent</li>
            <li>Your subscription status</li>
          </ul>
          <p>
            <strong>Payment records</strong> may be kept for legal, tax, or compliance purposes. They will not be used for any other purpose.
          </p>
        </section>

        <section>
          <h2>How to delete your account</h2>
          <ul>
            <li><strong>In the app:</strong> Go to Profile → Delete Account (when this option is available).</li>
            <li><strong>By email:</strong> Send an email to{' '}
              <a href="mailto:support@aqoonmaal.com" className="text-indigo-600 hover:underline">support@aqoonmaal.com</a>{' '}
              with the subject line <strong>“Delete my account”</strong> and the email address you used to sign up. We will process your request within 30 days.
            </li>
          </ul>
        </section>

        <section>
          <h2>This cannot be undone</h2>
          <p>Account deletion is permanent. We cannot restore your account or data after it has been deleted.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For account deletion or other requests: <a href="mailto:support@aqoonmaal.com" className="text-indigo-600 hover:underline">support@aqoonmaal.com</a>.
          </p>
        </section>
      </article>
    </>
  )
}
