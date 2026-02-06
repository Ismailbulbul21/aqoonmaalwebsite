import PageMeta from '../components/PageMeta'

export default function Privacy() {
  return (
    <>
      <PageMeta title="Privacy Policy" description="Aqoonmaal Privacy Policy – how we collect, use, and protect your data." />
      <article className="prose prose-gray max-w-none prose-headings:scroll-mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: February 2025</p>

        <section id="who">
          <h2>Who we are</h2>
          <p>
            Aqoonmaal is an education mobile app for Somali students in Class 8, Form 1, Form 2, Form 3, and Form 4. 
            We provide video lessons, progress tracking, class group chat, and subscription-based access. 
            This policy explains how we collect, use, and protect your information.
          </p>
        </section>

        <section id="collect">
          <h2>Data we collect</h2>
          <ul>
            <li><strong>Account:</strong> Email address, password (stored in hashed form), and name (in account metadata).</li>
            <li><strong>Profile:</strong> Class level (Class 8, Form 1–4), language preference, and optional phone number.</li>
            <li><strong>Progress:</strong> Lesson completion status, watch progress (seconds), and completion timestamps.</li>
            <li><strong>Chat:</strong> Text messages and optional images you send in your class group chat.</li>
            <li><strong>Payments:</strong> Payment amount, currency, payment provider, and transaction reference. We do not store card numbers; payments are processed via mobile money (EVC Plus, Edahab, Zaad, Sahal, etc.).</li>
          </ul>
        </section>

        <section id="use">
          <h2>How we use it</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Create and manage your account and profile.</li>
            <li>Deliver video lessons and track your learning progress.</li>
            <li>Run class group chat so you can communicate with classmates.</li>
            <li>Process subscriptions and payments.</li>
            <li>Provide support and respond to your requests.</li>
          </ul>
        </section>

        <section id="storage">
          <h2>Where it's stored</h2>
          <p>
            Your data is stored with Supabase (a secure, hosted platform). Chat images are stored in Supabase Storage. 
            Our systems use industry-standard security practices.
          </p>
        </section>

        <section id="sharing">
          <h2>Sharing</h2>
          <p>
            We do not sell your personal data. We may share data with payment providers (e.g. Waafi, EVC Plus, Edahab, Zaad, Sahal) 
            only as needed to process your transactions. In class chat, classmates in the same class can see your name and, 
            if you have added it, your optional phone number when they tap your name. We do not share your data with third parties 
            for marketing.
          </p>
        </section>

        <section id="retention">
          <h2>Retention</h2>
          <ul>
            <li>Account and profile data are kept until you delete your account.</li>
            <li>Payment records may be retained for legal, tax, and compliance purposes.</li>
            <li>Chat messages are kept until you delete them or your account is deleted.</li>
          </ul>
        </section>

        <section id="security">
          <h2>Security</h2>
          <p>
            We use hashed passwords, HTTPS for data in transit, and Row Level Security (RLS) in our database to protect your information.
          </p>
        </section>

        <section id="children">
          <h2>Children</h2>
          <p>
            The app is aimed at students aged 13 and above. Parents and guardians should supervise use by minors. 
            We do not knowingly collect data from children under 13 without appropriate consent.
          </p>
        </section>

        <section id="rights">
          <h2>Your rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access</strong> your personal data.</li>
            <li><strong>Correct</strong> your data (e.g. via profile editing in the app).</li>
            <li><strong>Delete</strong> your account and associated data (see our <a href="/delete-account" className="text-indigo-600 hover:underline">Delete Account page</a>).</li>
            <li><strong>Data portability</strong> – request a copy of your data in a usable format.</li>
          </ul>
          <p>To exercise these rights, contact us at the email below.</p>
        </section>

        <section id="changes">
          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Significant changes will be communicated in the app or by email. 
            Continued use of the app after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            For privacy requests, questions, or complaints, contact us at:{' '}
            <a href="mailto:support@aqoonmaal.com" className="text-indigo-600 hover:underline">support@aqoonmaal.com</a>.
          </p>
        </section>
      </article>
    </>
  )
}
