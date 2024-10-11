import React from 'react';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  const text = `Introduction

This Privacy Policy (“Policy”) is effective as of the date set forth above. PRExpress.io (“We”, “Us”, “Our”, and so on) is committed to honoring and encouraging the protection of your privacy (both our Users, who are registered, and Visitors, who operate without registration).

This Privacy Policy describes how we collect and use the personal data (personal information) you provide us with through your use of the website https://prexpress.io/ (our “Site”).

When you (as the User or as the Visitor) submit your personal information to the fields and forms or at the request and commands pushed through our Site, you expressly consent to our collection, use, and disclosure (if necessary) of your personal information as explained in this Policy.

This Policy addresses activities the Company is conducting and the services offering on our Site.
We cannot control employees and contractors engaged by our partners. If you visit another site that is placed on our Site, another person or entity may collect and use your personal information. Be sure to check their privacy policy before accepting their terms or services.

Be attentive while disclosing your sensitive personal information (e.g. data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade-union membership, and the processing of genetic data, health, your sex life, or sexual orientation) (“Sensitive Information”) to other Users and Visitors through the Site!

You should print a copy of this Policy for your records.

Data Controller

We are:
PRExpress.io
Address: Cyprus, Limassol, PO BOX 311232
Email: support@prexpress.io

Data We Collect

Information we ask you to provide us with account setup (creation):
Your name;
Business email address;
Phone number.

You do not have to fill in the data mentioned above. However, your profile gets you an opportunity of richer experience from our Site, including the opportunity to get in contact with publishers.

We treat the information as true data about you. We use these data in order to identify you and confirm your persona, to facilitate the communication between you and prospective publishers.

Information created when you use our Site

When you use our Site, we may collect information created by the software, protocols, networks, and devices you use to access the Site (including, but not limited to identifiers, logs, and metadata).

Such personal information may comprise:
IP address;
The browser you use;
Network connection;
Geotags and location data (user token associated with the user ID);
The language you use;
Device identifiers.

We use this information to make the functionality of our Site available to you, enable you to use third-party services, enhance our Site, and answer any questions or queries you may have.

We also use third-party payment processors to assist it in processing and share with them personal information payment information securely. The following data might be collected:
Email address;
Tax number.

Please note that we do not collect your credit card data. We use payment gateways to process your orders.

Location data

We may ask you to disclose your location determined by the geolocation features of your device. We need this data to offer you publications targeted at your city, region, or country. Location data is used as you allow its collection in the privacy settings of your device (always or only when you actively use the Site).

To determine your location, various personal data may be automatically collected and processed, including your IP address and other sensors.

Information obtained through the use of live chat

We use a live chat service. This live chat service allows us to connect with you and answer sales and customer services questions quickly and directly through the form you fill in. The form may comprise the following personal data:
Full name;
Phone number;
Business email.

We ensure that this service provider protects your data but you should not provide any Sensitive Information in this chat, which is intended to provide you with quick answers to basic service questions only.

Information about you obtained from other sources

We do not receive any personal data on you when you visit the links or use the services from our partners. We only know the number of clicks on certain links made by our users. All the data you fill in there or provide our partners with is under their responsibility and is collected, used, and disclosed pursuant to their privacy policies. Please, check their privacy policies before accepting their services.

We may obtain Information from free access sources such as public databases, resellers and channel partners, joint marketing partners, social media platforms, or other publicly available information for the purposes prescribed under this Policy. If we combine or associate information from other sources with Personal Information that we collect through the PRExpress.io website, we will treat the combined information as personal information in accordance with this Policy.

We use this information (alone or in combination with other information we have collected about you) to enhance our ability to provide relevant marketing, offers, and services in conducting our Services.

We will additionally ask for your consent in case we need your data for the purposes not described in this Policy.`;

  return (
    <div className={styles.cont}>
      <h1 className={styles.h1_cont}>Privacy Policy</h1>
      <div className={styles.line}></div>
      <div className={styles.cont_p} style={{ whiteSpace: 'pre-wrap' }}>
        {text}
      </div>
    </div>
  );
}