import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <p className="text-sm text-espresso-textSecondary mb-8">
          Last updated: August 22, 2026
        </p>

        <div className="prose prose-invert text-espresso-textSecondary text-sm space-y-6">
            <section>
              <p>
                Kaptur ("Kaptur", "we", "us", or "our") is a job-application
                tracking service that helps users organize their job search by
                identifying and organizing job-application-related emails from
                their Gmail account.
              </p>

              <p>
                This Privacy Policy explains what information Kaptur accesses,
                how we use it, how it is stored and shared, and the choices
                available to you.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                1. Information We Collect
              </h2>

              <h3 className="text-espresso-textPrimary font-medium mb-2">
                Google Account Information
              </h3>

              <p>
                When you sign in with Google, Kaptur may receive basic Google
                Account information such as:
                <br />
                - Your Google account email address
                <br />
                - Your name
                <br />
                - Your Google profile information
              </p>

              <p>
                This information is used to create, authenticate, and identify
                your Kaptur account.
              </p>

              <h3 className="text-espresso-textPrimary font-medium mb-2">
                Gmail Information
              </h3>

              <p>
                If you choose to connect Gmail, Kaptur requests read-only access
                to your Gmail account using Google's{" "}
                <code className="text-caramel">gmail.readonly</code> permission.
              </p>

              <p>
                Kaptur may access information from Gmail messages that is
                necessary to identify and organize job-application activity,
                including:
                <br />
                - Sender and recipient information
                <br />
                - Email subject
                <br />
                - Email date and time
                <br />
                - Email snippets or relevant email content
                <br />
                - Information contained in application, interview, assessment,
                rejection, offer, and other recruitment-related emails
              </p>

              <p>
                Kaptur uses Gmail access only to provide its job-application
                tracking functionality. Kaptur does{" "}
                <strong className="text-espresso-textPrimary">not</strong> use
                Gmail access to send, modify, delete, or manage emails.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                2. How We Use Your Information
              </h2>

              <p>
                Kaptur uses information obtained from your Google Account and Gmail
                only to provide and improve the job-application tracking features
                you choose to use.
              </p>

              <p>
                This includes:
                <br />
                - Identifying emails related to job applications
                <br />
                - Classifying job-related emails
                <br />
                - Extracting information such as company, role, application
                status, and relevant application details
                <br />
                - Organizing extracted information in your Kaptur application
                tracker
                <br />
                - Helping you monitor and manage your job-search activity
              </p>

              <p>
                Kaptur does not use your Gmail data for advertising, targeted
                advertising, or selling your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                3. What We Store
              </h2>

              <p>
                Depending on the features you use, Kaptur may store information
                necessary to provide your account and application tracker,
                including:
              </p>

              <p>
                - Your Google account email address and profile information
                <br />
                - Job-application-related email metadata
                <br />
                - Email subjects, senders, dates, and relevant snippets or content
                used for processing
                <br />
                - Extracted application information such as company, role,
                application status, and other relevant details
                <br />
                - Information you manually add or edit in your application
                tracker
              </p>

              <p>
                Kaptur does not intentionally store unrelated Gmail messages that
                are not needed for the application's job-tracking functionality.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                4. AI Processing
              </h2>

              <p>
                Kaptur uses automated processing and third-party AI services to
                classify relevant emails and extract structured job-application
                information.
              </p>

              <p>
                For these features, relevant email information may be sent to
                Groq's API for processing. The information is sent only to perform
                the classification and extraction functionality provided by
                Kaptur.
              </p>

              <p>
                Kaptur does not authorize the use of your Gmail data for
                generalized AI model training.
              </p>

              <p>
                Groq states that customer inputs and outputs are not retained by
                default for inference requests, subject to limited circumstances
                such as reliability and abuse monitoring. Kaptur's use of Groq is
                subject to the applicable Groq terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                5. Third-Party Services
              </h2>

              <p>
                Kaptur relies on third-party services to operate its
                functionality. These may include:
              </p>

              <p>
                <strong className="text-espresso-textPrimary">
                  Google APIs
                </strong>
                <br />
                Used for Google authentication and, when you authorize it,
                read-only access to Gmail.
              </p>

              <p>
                <strong className="text-espresso-textPrimary">
                  MongoDB / MongoDB Atlas
                </strong>
                <br />
                Used to store application and account data required by Kaptur.
              </p>

              <p>
                <strong className="text-espresso-textPrimary">
                  Groq
                </strong>
                <br />
                Used to process relevant email information for automated
                classification and extraction.
              </p>

              <p>
                These services may process information as necessary to provide
                their respective services. Kaptur does not sell Google user data
                or Gmail data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                6. Data Security
              </h2>

              <p>
                Kaptur uses reasonable technical and organizational measures
                designed to protect your information from unauthorized access,
                alteration, disclosure, or destruction.
              </p>

              <p>
                Access to application data and authentication credentials is
                restricted to the systems and services necessary to operate
                Kaptur.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                7. Data Retention
              </h2>

              <p>
                Kaptur retains account and application information for as long as
                necessary to provide the service, unless you request deletion or
                a longer retention period is required by law.
              </p>

              <p>
                Gmail information is accessed only for the functionality you have
                authorized. When information is no longer required for the
                application's functionality, Kaptur will take reasonable steps
                to delete it in accordance with its data-management practices.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                8. Your Choices and Data Deletion
              </h2>

              <p>
                You can revoke Kaptur's access to your Google Account at any time
                through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caramel underline"
                >
                  Google Account permissions
                </a>
                .
              </p>

              <p>
                You may also request deletion of your Kaptur account and associated
                personal data by contacting us using the email address below.
              </p>

              <p>
                When you request deletion, we will take reasonable steps to delete
                your associated account and application data, subject to data that
                we are required to retain for legal, security, or legitimate
                operational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                9. Google API Services User Data Policy
              </h2>

              <p>
                Kaptur's use and transfer of information received from Google APIs
                will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caramel underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>

              <p>
                Google user data obtained through Google APIs is used only to
                provide or improve user-facing features that are visible and
                relevant to Kaptur's functionality.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                10. Children's Privacy
              </h2>

              <p>
                Kaptur is not intended for children under the age required by
                applicable law. We do not knowingly collect personal information
                from children in violation of applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                11. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time to reflect
                changes to Kaptur, our data practices, or applicable requirements.
              </p>

              <p>
                When we make changes, we will update the "Last updated" date on
                this page.
              </p>
            </section>

            <section>
              <h2 className="text-espresso-textPrimary font-medium mb-2">
                12. Contact
              </h2>

              <p>
                If you have questions about this Privacy Policy, your Google data,
                or your Kaptur account, please contact:
              </p>

              <p className="text-caramel">
                aakritiarya2005@gmail.com
              </p>
            </section>
        </div>
    </div>
  );
}