export default function PrivacyPolicy() {
  return (
    <div className="py-12 px-6 md:px-16 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-[#201A16] dark:text-[#EAE1D9] tracking-tight">Privacy Policy</h1>
      
      <div className="prose prose-xl prose-strong:text-[#201A16] dark:prose-strong:text-[#EAE1D9] text-[#50453D] dark:text-[#D1C5B4] max-w-none">
        <p className="lead font-medium text-[#201A16] dark:text-[#EAE1D9]">
          This privacy policy applies to the <strong>Naspend</strong> (also known as Expense Manager in some regions) app (hereby referred to as "Application") for mobile devices that was created by <strong>Us Alone</strong> (hereby referred to as "Service Provider").
        </p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">1. Information Collection and Use</h2>
        <p>The core functionality of the Application is designed to operate locally on your device. The Service Provider <strong>does not</strong> collect, transmit, or store your personal financial records, transaction history, or budget limits on external servers.</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><strong>Local Data Storage:</strong> All your financial data entered into the Application is stored strictly locally on your device's internal database. This data is entirely under your control and is not accessible to the Service Provider.</li>
        </ul>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">2. Third-Party Services and Data Collection</h2>
        <p>While your financial data remains offline, the Application utilizes trusted third-party services to display advertisements, handle premium upgrades, and ensure app stability. These third-party services may automatically collect certain non-personally identifiable information:</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><strong>Google AdMob:</strong> The Application uses Google AdMob to display ads. AdMob may collect and share your Advertising ID (Device ID), IP address, and app interaction data to provide personalized or non-personalized ads, prevent fraud, and analyze ad performance.</li>
          <li><strong>Google Play Billing:</strong> If you choose to upgrade to the Premium version (In-App Purchase), your purchase is processed securely by Google Play. We collect your Purchase History solely to verify your Premium status and unlock features across your devices. We do not have access to your credit card or banking details.</li>
          <li><strong>Crash Logs and Diagnostics:</strong> To improve app stability, our third-party SDKs may automatically collect crash logs and diagnostic data if the Application encounters an error.</li>
        </ul>
        <p>Links to the privacy policies of third-party service providers used by the Application:</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-[#8D4F00] dark:text-[#FFB870] font-bold hover:underline">Google Play Services</a></li>
          <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noreferrer" className="text-[#8D4F00] dark:text-[#FFB870] font-bold hover:underline">Google AdMob</a></li>
        </ul>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">3. GDPR and EEA Users (European Economic Area)</h2>
        <p>If you are located in the EEA or the UK, the Application uses Google's User Messaging Platform (UMP) to gather your consent regarding personalized advertising. You have the right to consent to, refuse, or withdraw your consent for personalized ads at any time through the "Privacy Options" menu within the Application settings.</p>

        {/* PHẦN ĐƯỢC THÊM MỚI VỀ LUẬT HOA KỲ (CCPA/CPRA) */}
        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">4. US State Privacy Rights (CCPA/CPRA and others)</h2>
        <p className="mb-4">If you are a resident of California or other applicable US states, you have specific rights regarding your personal information under state privacy laws. This includes the right to opt-out of the "sale" or "sharing" of your personal information for cross-context behavioral advertising.</p>
        <p>While the Service Provider does not directly sell your personal data or financial records, our advertising partner (Google AdMob) may collect device identifiers and usage data to serve personalized ads. You can manage your ad preferences, exercise your right to opt-out, or change your consent status at any time by accessing the "Privacy Options" menu within the Application settings.</p>

        {/* CÁC PHẦN DƯỚI ĐƯỢC ĐÁNH SỐ TỊNH TIẾN LÊN */}
        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">5. Data Retention and Deletion</h2>
        <p>Since your financial data is stored locally, you have full control over it. You can delete your data at any time by clearing the Application's storage in your device settings or uninstalling the Application. The Service Provider does not hold user accounts, and therefore, there is no account deletion process required on our end.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">6. Children</h2>
        <p>The Application does not knowingly collect any personal data from children under the age of 13.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">7. Changes</h2>
        <p>This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. Continued use of the Application is deemed approval of all changes.</p>
        
        <p className="bg-[#F5EFE6] dark:bg-[#211B16] p-4 rounded-xl border border-[#EBE1D9] dark:border-[#352D27] font-bold text-[#201A16] dark:text-[#EAE1D9] mt-12 mb-8">This privacy policy is effective as of March 2026</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Contact Us</h2>
        <p>If you have any questions regarding privacy while using the Application, please contact the Service Provider via email at <a href="mailto:tuannam2505@gmail.com" className="text-[#8D4F00] dark:text-[#FFB870] font-bold hover:underline">tuannam2505@gmail.com</a>.</p>
      </div>
    </div>
  );
}