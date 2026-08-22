import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-espresso-canvas px-6 md:px-12 py-12 max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-espresso-textSecondary hover:text-caramel mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Kaptur
        </Link>
      <h1 className="font-serif text-3xl font-semibold text-espresso-textPrimary mb-2">
        Terms of Service
      </h1>

      <p className="text-sm text-espresso-textSecondary mb-8">
        Last updated: August 22, 2026
      </p>

      <div className="prose prose-invert text-espresso-textSecondary text-sm space-y-6">
        <section>
          <p>
            Welcome to Kaptur. By accessing or using Kaptur, you agree to these
            Terms of Service. If you do not agree with these terms, please do
            not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            1. About Kaptur
          </h2>

          <p>
            Kaptur is a job-application tracking service that helps users
            organize their job search by automatically identifying
            job-application-related information from emails and presenting it
            in an application tracker.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            2. Using Kaptur
          </h2>

          <p>
            You may use Kaptur only for lawful purposes and in accordance with
            these Terms.
          </p>

          <p>
            You are responsible for:
            <br />
            - Maintaining the security of your Google account
            <br />
            - Providing accurate information when using Kaptur
            <br />
            - Ensuring that you have the right to connect the Google account
            you authorize
            <br />
            - Reviewing information generated or extracted by Kaptur before
            relying on it
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            3. Google Account and Gmail Access
          </h2>

          <p>
            Kaptur uses Google OAuth to allow users to connect their Google
            Account.
          </p>

          <p>
            If you choose to connect Gmail, you authorize Kaptur to access
            Gmail information using the permissions presented during the Google
            authorization process.
          </p>

          <p>
            Kaptur uses read-only Gmail access to identify and organize
            job-application-related emails. Kaptur does not send, modify, or
            delete emails on your behalf.
          </p>

          <p>
            You can revoke Kaptur&apos;s access to your Google Account at any
            time through your Google Account settings.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            4. AI-Generated and Extracted Information
          </h2>

          <p>
            Kaptur may use automated systems and third-party AI services to
            classify emails and extract job-application information.
          </p>

          <p>
            Automatically extracted or AI-generated information may be
            incomplete, inaccurate, or incorrectly classified. Kaptur does not
            guarantee that every job application, interview, rejection, offer,
            or other recruitment event will be detected correctly.
          </p>

          <p>
            You should review important information before relying on it.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            5. Your Content
          </h2>

          <p>
            You retain your rights to information and content that you provide
            to Kaptur or that Kaptur accesses from your authorized Google
            account.
          </p>

          <p>
            You grant Kaptur the limited permission necessary to process that
            information in order to provide the Kaptur service.
          </p>

          <p>Kaptur does not claim ownership of your Gmail content.</p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            6. Prohibited Use
          </h2>

          <p>
            You must not:
            <br />
            - Use Kaptur for unlawful purposes
            <br />
            - Attempt to gain unauthorized access to another user&apos;s
            account or data
            <br />
            - Interfere with the security or operation of Kaptur
            <br />
            - Attempt to reverse engineer, abuse, or disrupt the service
            <br />
            - Use Kaptur to violate the rights of another person
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            7. Service Availability
          </h2>

          <p>
            Kaptur is an evolving service and may be changed, interrupted, or
            discontinued at any time.
          </p>

          <p>
            We do not guarantee that Kaptur will always be available,
            error-free, or that every job application will be detected or
            tracked correctly.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            8. Third-Party Services
          </h2>

          <p>
            Kaptur relies on third-party services, including Google APIs,
            cloud infrastructure providers, databases, and AI processing
            services.
          </p>

          <p>
            Your use of those services may also be subject to their respective
            terms, policies, and privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            9. Account Termination
          </h2>

          <p>
            You may stop using Kaptur at any time.
          </p>

          <p>
            We may suspend or terminate access where reasonably necessary to
            protect Kaptur, its users, or comply with applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            10. Disclaimer
          </h2>

          <p>
            Kaptur is a productivity tool and does not guarantee employment,
            interviews, application success, or the accuracy of information
            extracted from emails.
          </p>

          <p>
            Kaptur should not be relied upon as the sole source of information
            about your job applications.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            11. Changes to These Terms
          </h2>

          <p>
            We may update these Terms from time to time to reflect changes to
            Kaptur, our services, or applicable requirements.
          </p>

          <p>
            When we make changes, we will update the &quot;Last updated&quot;
            date on this page.
          </p>
        </section>

        <section>
          <h2 className="text-espresso-textPrimary font-medium mb-2">
            12. Contact
          </h2>

          <p>
            If you have questions about these Terms of Service, please contact
            us at:
          </p>

          <p className="text-caramel">
            aakritiarya2005@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}