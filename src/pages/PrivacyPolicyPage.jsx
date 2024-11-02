import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      title: 'Introduction',
      content: (
        <>
          <p>
            The ITL Conference (“We” or “Our”) and its Affiliates (as such term is defined in the Terms and Conditions located at https://www.itlconference.ca/terms) respect your privacy and this policy (the “Privacy Policy”) describes how we are committed to protecting your personal information. When you use https://www.itlconference.ca, and any existing or future related websites, including websites of Affiliates (the “Site”), we may collect, store, use and disclose information about you in accordance with this privacy policy. This policy describes in detail how we collect, store, use and protect any information you provide to us and describes the following:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Why we collect your personal information.</li>
            <li>What information is collected by The ITL Conference.</li>
            <li>How we use and store your information.</li>
            <li>How we may share information.</li>
            <li>How to contact The ITL Conference.</li>
          </ul>
          <p>
            You may visit our Site without identifying yourself or providing any personal information. In certain circumstances, we may also ask you to provide us with certain personal information for the purposes set out in this Privacy Policy or to access certain functions of the Site.
          </p>
          <p>
            At The ITL Conference, you decide how we communicate with you. We respond to your customer inquiries using the contact details you have provided to us. We may send you promotional material by various communication channels. This Privacy Policy explains how you can choose how we communicate with you.
          </p>
          <p>
            Please read this policy carefully to understand our policies and practices for collecting, processing, and storing your information. If you do not agree with our policies and practices, do not download, register with, access or use our Site. By downloading, registering with, accessing or using the Site, you indicate that you understand, accept, and consent to the practices described in this Privacy Policy. This Privacy Policy may change from time to time. Your continued use of our Site after we make changes indicates that you accept and consent to those changes, so please check the policy periodically for updates.
          </p>
        </>
      ),
    },
    {
      title: 'Personal Information',
      content: (
        <>
          <p>
            We will only use your personal information in accordance with this policy unless otherwise required by applicable law. We take steps to ensure that the personal information that we collect about you is adequate, relevant, not excessive, and used for limited purposes. Privacy laws in Canada generally define &#39;personal information&#39; as any information about an identifiable individual, which includes information that can be used on its own or with other information to identify, contact, or locate a single person. Personal information does not include business contact information, including your name, title, or business contact information.
          </p>
          <p>
            Do not provide or send any personal information (particularly financial or credit card information) that is requested of you through an unsolicited email or phone call that appears to be from The ITL Conference or its Affiliates. We will not contact you to request such information; we will only request such information from you when completing an order through the Site.
          </p>
        </>
      ),
    },
    {
      title: 'Why We Collect Your Personal Information',
      content: (
        <>
          <p>
            We collect your information in order to provide you with a more personalized, convenient, secure, and enjoyable conference experience, and for any other purpose set out in this Privacy Policy. We may retain some of your personal information in order to provide you with a personalized welcome and user experience during subsequent visits. We may also ask you to provide us with certain information online in order to fulfill our legal and contractual obligations. Additionally, the collection of your personal information allows us to help detect and address illegal activity or other objectionable conduct online.
          </p>
        </>
      ),
    },
    {
      title: 'What Information Is Collected by The ITL Conference',
      content: (
        <>
          <p>
            We receive and may retain various information that you voluntarily provide to us during a visit to our Site, in an application for employment with us, in correspondence when you contact us, or any other information or preference that you provide to us for the purposes set out in this Privacy Policy. This information may include the following:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Your name, address (including postal code), and telephone number;</li>
            <li>Your location;</li>
            <li>Your email address;</li>
            <li>Your IP address;</li>
            <li>Photos or videos in which you appear;</li>
            <li>Proof of identity;</li>
            <li>Payment and billing information for purposes of completing an order;</li>
            <li>Any other information that you agree to communicate to us through our Site or by other means.</li>
          </ul>
          <p>
            For purposes set out in this Privacy Policy, or any other purpose which you consent to, we may collect and use real-time information about your device’s location. If you block, disable, or otherwise disallow the use of location or tracking technologies on your device, the Site may be inaccessible or certain functions may become unavailable. We may also receive information about you from other sources in accordance with applicable privacy laws, including but not limited to up-to-date information about your address or any other applicable information. This information may help us enhance your conference user experience.
          </p>
        </>
      ),
    },
    {
      title: 'Cookies and Other Technologies',
      content: (
        <>
          <p>
            When you visit our Site or communicate with us, we and our third-party service providers may use technological tools that automatically collect information about how you access, navigate, and leave our Site. For example, we collect information about what other website you have visited before ours, what type of browser and operating system you use, the IP address from which you visit the Site, the pages you visit, and the website you visit when leaving ours. In general, we do not link this type of information to your personal information unless we are investigating the security of our Site.
          </p>
          <p>
            Some of our general and promotional communications use cookies, pixel files, and other digital markers. A cookie is a small data file transmitted to your computer by web servers, which allows you to track your browser activity while you are visiting our Site. This information tells us how you use our Site, how we could improve the design and content, and how we could provide you with a better user experience. We do not use cookies to access personal files on your personal device.
          </p>
          <p>
            Our Site may use pixel files and cookies to administer our online promotional programs. Pixel files and cookies can keep track of your browser so that you can be recognized when you visit other websites. We also use pixel files to find out if you open the promotional communications we send to you. Generally, these pixel files are of limited duration and come from our ad management service providers who may use these pixel files and cookies to load an advertisement from The ITL Conference or its Affiliates when you visit certain other third-party websites. We do not control these third parties&#39; tracking technologies or how they use them. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.
          </p>
          <p>
            This Site uses Google Analytics, a web analytics service provided by Google, Inc. Google Analytics uses cookies to allow us to analyze how users use the Site. The information generated by the cookie in relation to your use of the Site (including your IP address) is transmitted to Google, who stores it on its servers. Google may use this information to evaluate your use of the Site, to compile reports on Site activity for website or app operators, and to provide other services relating to Site activity and marketing. Google may also transfer this information to third parties when required by law or when these third parties process the information on its behalf. You can refuse the use of cookies by modifying the appropriate settings in your browser; note, however, that if you disable the use of cookies, some areas of the Site may not be accessible or function adequately.
          </p>
          <p>
            If you prefer not to accept cookies, most browsers will allow you (i) to change their settings so that you are notified each time you receive a cookie, which allows you to decide whether or not to accept it, (ii) delete existing cookies, and (iii) configure your browser to automatically refuse all cookies.You may also opt out network advertising programs that track your activities across multiple websites to deliver targeted advertising to you. Please see the ”Understanding Online Advertising” and ”Online Behavioral Advertising Opt-Out” pages on the Digital Advertising Alliance of Canada website and the Network Advertising Initiative’s Ad Opt-Out page . The aforementioned websites offer tools to find out if The ITL Conference or its Affiliates may have cookies in your browser and how to remove them. You will continue to receive other types of advertising from member companies, but they will not be based on your interests. Since deleting cookies from a browser may remove your opt-out preferences, you should use these tools regularly to ensure that your preferences are up to date. 
          </p>
        </>
      ),
    },
    {
      title: 'How We Use Your Personal Information',
      content: (
        <>
          <p>We may use the information we obtain about you to:</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>To create and maintain your account and provide you with access to our Site.</li>
            <li>Provide you with the Sites and other services that you request.</li>
            <li>Manage your participation in events hosted on the Sites, where you have signed up for such events and promotions.</li>
            <li>Maintain a record of the events in which you participate, including chat and webinar history and download activity.</li>
            <li>Enable you to interact with other event participants.</li>
            <li>Provide administrative notices or communications applicable to your use of the Sites.</li>
            <li>Operate, evaluate, and improve our business and the products and services we offer.</li>
            <li>Analyze and enhance our marketing communications and strategies.</li>
            <li>Analyze trends and statistics regarding visitors’ use of our Sites.</li>
            <li>Maintain the quality of the Sites, including detecting security incidents and protecting against malicious activities.</li>
            <li>Notify you about relevant products and services operated by the ITL Conference.</li>
            <li>Enforce our Sites’ Terms of Use and legal rights.</li>
            <li>Comply with applicable legal requirements and industry standards and policies.</li>
          </ul>
          <p>
          We also use non-personally identifiable information and certain technical information about your computer and your access to the Sites (including your internet protocol address) in order to operate, maintain and manage the Sites. 
          </p>
          <p>
            We may collect, compile, store, publish, promote, report, share or otherwise disclose or use any and all aggregated information, however, unless otherwise disclosed in this policy, we will not sell or otherwise transfer or disclose your Personal Information to a third party without your consent. 
            Our customers may use the ITL Conference and a “Customer Site” to process data, and this data may contain your personal information.  The data that we process through the Sites in that case is processed on behalf of our customer, and our privacy practices are governed by the contracts that we have in place with our customers. If you have any questions or concerns about how personal information in such data is handled or would like to exercise your rights, you should contact the person or entity (i.e., the data controller) who has contracted with us to use the Customer Site to process this data.  Our customers, and sometimes a “Third Party”, as described above, control the Personal Information in such a case. We will provide assistance to our customers to address your concerns in accordance with the terms of our contract with them.
        
          </p>
          <p>
          If we seek to use the information we obtain about you in other ways, we will provide specific notice and request your consent at the time of collection. The ITL Conference would like to send you information of products or services of ours that we think you might like. If you have agreed to receive marketing, you may always opt out at a later date. You have the right at any time to stop the ITL Conference from contacting you for marketing purposes. If you no longer wish to be contacted for marketing purposes, you may unsubscribe here. If you opt out of our marketing, you may still receive transactional emails from the ITL Conference in connection with your use of the Sites. You will also continue to receive marketing in connection with a Customer Site until you specifically opt out of such marketing.
          </p>
        </>
      ),
    },
    {
      title: 'How the ITL Conference Protects and Stores Your Personal Information',
      content: (
        <>
          <p>
            Your personal information is kept confidential. They are stored and processed on our computers located in Canada and maintained by our third-party service providers. Your personal information is subject to the laws of those jurisdictions, including laws that allow access to it for law enforcement purposes. These laws may differ from the laws of your jurisdiction of residence. We use administrative, procedural, and technical measures to protect your information against loss or theft and against unauthorized access or disclosure in order to protect your privacy. These safeguards include firewalls and encryption.
          </p>
          <p>
            The safety and security of your information also depend on you. Where we have given you (or you have chosen) a password for access to certain parts of the Site, you are responsible for keeping it confidential. We ask you not to share your password with anyone. We urge you to be careful about giving out information over the Internet or in your interaction and communication with others.
          </p>
          <p>
            Unfortunately, the transmission of information via the Internet and mobile platforms is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted through the Internet, third-party digital networks, websites, mobile devices, the Site, or any social media platforms. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any Site privacy settings or security measures.
          </p>
          <p>
            We cannot be held responsible for cases of fraud or theft over the Internet. Please be aware of this when providing information through the Site.
            By submitting your personal information or engaging with the Site, you consent to the transfer, storage, or processing of your personal information in accordance with this Privacy Policy.

          </p>
        </>
      ),
    },
    {
      title: 'Data Retention',
      content: (
        <>
          <p>
            Except as otherwise permitted or required by applicable law or regulation, we will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Under some circumstances we may anonymize or aggregate your personal information so that it can no longer be associated with you. We reserve the right to use such anonymize and de-identified data for any legitimate business purpose without further notice to you or your consent. Your consent therefore remains valid after the end of our relationship with you.
          </p>
        </>
      ),
    },
    {
      title: 'Privacy Policy Updates',
      content: (
        <>
          <p>
            The ITL Conference keeps its policy under regular review and places any update on this web page. If we decide to make material changes to our Privacy Policy, we will notify you by prominently posting notice of the changes on the Site and updating the date at the top of the Privacy Policy. Therefore, we encourage you to check the date of our Privacy Policy whenever you visit the website for any updates or changes. We understand that changes to this Privacy Policy may affect your decision to use our Sites. You have the option to deactivate your account for any reason. Continued use of our Sites and their services following notice of such changes shall indicate your acknowledgment of such changes and agreement to be bound by the terms and conditions of such changes.
          </p>
          <p>
            Continued use of our Sites and their services following notice of such changes shall indicate your acknowledgment of such changes and agreement to be bound by the terms and conditions of such changes.
          </p>
        </>
      ),
    },
    {
      title: 'How to Contact the ITL Conference',
      content: (
        <>
          <p>
            If you would like more information about our privacy policy or our personal information management practices or to request access to, correct, or delete any personal information that you have provided to us, please contact us by email at info@itlconference.ca. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect. We may charge you a fee to access your personal information; however, we will notify you of any fee in advance.
          </p>
          <p>
            We will provide access to your personal information, subject to exceptions set out in applicable privacy legislation. Examples of such exceptions include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Information protected by solicitor-client privilege.</li>
            <li>Information that is part of a formal dispute resolution process.</li>
            <li>Information that is about another individual that would reveal their personal information or confidential commercial information.</li>
            <li>Information that is prohibitively expensive to provide.</li>
          </ul>
          <p>
            If you do not wish to receive promotional material from The ITL Conference or if you wish to review, verify, correct, or withdraw consent to the use of your personal information, please contact us by email. Please note that if you withdraw your consent, we may not be able to provide you with a particular product or service.
          </p>
        </>
      ),
    },
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 mt-28 ml-8 mr-8 mb-16">
        <h1 className='text-3xl text-center text-wine font-bold'>Our Privacy Policy</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          className="border border-wine rounded-lg shadow-sm transition-all duration-300"
        >
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="text-lg font-semibold text-gray-700">
              {section.title}
            </span>
            {activeIndex === index ? (
              <FaChevronDown className="text-indigo-500 transition-transform duration-300 transform rotate-180" />
            ) : (
              <FaChevronRight className="text-gray-500 transition-transform duration-300 transform rotate-0" />
            )}
          </button>
          {activeIndex === index && (
            <div className="p-6 bg-white border-t border-gray-300">
              <p className="text-black text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
  
};

export default Accordion;
