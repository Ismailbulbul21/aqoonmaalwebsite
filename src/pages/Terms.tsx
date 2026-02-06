import PageMeta from '../components/PageMeta'

export default function Terms() {
  return (
    <>
      <PageMeta title="Terms of Service" description="Aqoonmaal Terms of Service – rules for using the app and subscription." />
      <article className="prose prose-gray max-w-none prose-headings:scroll-mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: February 2025</p>

        <section>
          <h2>Acceptance</h2>
          <p>By downloading, installing, or using the Aqoonmaal app, you agree to these Terms of Service. If you do not agree, do not use the app.</p>
        </section>

        <section>
          <h2>Eligibility</h2>
          <p>You must be at least 13 years old to use the app, or have the consent of a parent or guardian. By using the app, you confirm that you meet this requirement.</p>
        </section>

        <section>
          <h2>Account</h2>
          <p>You must provide accurate information when creating your account. You are responsible for keeping your login details secure and for all activity under your account. Notify us promptly if you suspect unauthorized access.</p>
        </section>

        <section>
          <h2>Use of the app</h2>
          <p>The app is for personal, educational use only. You agree not to:</p>
          <ul>
            <li>Abuse, harass, or spam others in chat.</li>
            <li>Post illegal, offensive, or inappropriate content.</li>
            <li>Share your account or circumvent the paywall.</li>
            <li>Reverse engineer, copy, or misuse the app or its content.</li>
          </ul>
        </section>

        <section>
          <h2>Content</h2>
          <p>Video lessons and other content in the app are owned by Aqoonmaal or its licensors. You may not copy, redistribute, or use them for commercial purposes without our written permission.</p>
        </section>

        <section>
          <h2>Subscription and payments</h2>
          <p>Paid plans (e.g. monthly or yearly) are subject to the terms shown at the time of purchase. Auto-renewal, cancellation, and refunds follow the rules of the payment provider and applicable law. For refund requests, contact us at the email below.</p>
        </section>

        <section>
          <h2>Chat</h2>
          <p>Class chat is moderated. We may delete messages and suspend or ban users who violate these terms or our community standards.</p>
        </section>

        <section>
          <h2>Termination</h2>
          <p>We may suspend or terminate your account if you breach these terms. You may delete your account at any time (see our <a href="/delete-account" className="text-indigo-600 hover:underline">Delete Account</a> page).</p>
        </section>

        <section>
          <h2>Disclaimers</h2>
          <p>Educational content is provided “as is.” We do not guarantee any particular exam results or outcomes.</p>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, Aqoonmaal and its providers are not liable for indirect, incidental, or consequential damages arising from your use of the app.</p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>We may update these terms. Continued use of the app after changes constitutes acceptance of the updated terms. We will communicate significant changes in the app or by email where appropriate.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these terms: <a href="mailto:ismailbulbul381@gmail.com" className="text-indigo-600 hover:underline">ismailbulbul381@gmail.com</a>.
          </p>
        </section>
      </article>
    </>
  )
}
