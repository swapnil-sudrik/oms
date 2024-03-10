import React from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";
import { Container } from "reactstrap";

const PrivacyPolicy = () => {
  return (
    <div>
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />
      <Container>
        <div className="my-4">
            <h5 className="text-center my-4">Privacy Policy</h5><hr/>
          <div>
            <h6>Privacy Policy</h6>
            <p>
              Future Scope herein referred as the “service” is being operated as
              a unit of refereed as “us”, “we”, or “our” This policy contains
              the information regarding collection, use and disclosure of
              Personal Information when you use our Service online or offline.
            </p>
            <br />
            <h6>Information Collection and Put to Use</h6>
            <p>
              During the course of our deliverance of service, we may ask you to
              provide us certain personally identifiable information that can be
              used as your identification or to contact you at a later stage.
              Personally identifiable information may include, but is not
              limited to, your email address, name, phone number, other
              information (“Personal Information” such as Adhar no Pan No etc).
            </p>
            <br />
            <h6>Log Data</h6>
            <p>
              Future Scope Institute may collect information that your browser
              sends and stores whenever you visit our Service at
              future-scope-institute.com (“Log Data”). Information such as your
              computer’s/Phone Internet Protocol (“IP”) address, browser type,
              browser version, the pages of our Service you have visited, time
              and date of your visit, and other statistics which can be used by
              Future Scope institute to improve our services. Future Scope
              institute may also use third party services such as Google
              Analytics for collecting statistical data which can be used to
              improve our service quality and response time. You may visit
              website of these service providers to understand their terms and
              condition and privacy policy.
            </p>
            <br />
            <h6>Cookies</h6>
            <p>
              Cookies are temporary files with small amount of data and are
              created when you visit a website, which may include an anonymous
              unique identifier. Future Scope Institute uses “cookies” to
              collect statistical information. However you may always instruct
              your browser to refuse all or some cookies doing so will restrict
              your access to some portion of services offered at our website.
            </p>
            <br /> <br />
            <h6>Behavioral Remarketing</h6>
            <p>
              In the era of Digital Marketing Future Scope institute advertise
              on third party website using remarketing techniques. We, and all
              our third party vendors, use cookies to advice, improve and show
              ads based on the trends of your past visits to our website
              future-scope-institute.com
            </p>
            <br />
            <h6>Google</h6>
            <p>
              Google Inc provides Google AdWords remarketing service. You may
              visit the Google Ads Settings page and can opt-out of Google
              Analytics which will disable the display advertising done by
              Google. It is recommended by Google to install the Google
              Analytics Opt-out Browser Add-on for your web browser. It will
              help visitors with the ability to prevent their data from being
              collected and used by Google Analytics.
              <br />
              <br />
              All our users are encouraged to visit the Google Privacy & Terms
              web page for more information on the privacy practices of Google.
            </p>
            <br />
            <h6>Service Providers</h6>
            <p>
              Third party vendor companies and individuals are often engaged by
              us to facilitate our Service, to perform any add-on service or to
              help us in analytics. These third parties are advised and
              obligated from us to not to use or disclose your personal
              information to anyone without a valid cause.
            </p>
            <br />
            <h6>Communications</h6>
            <p>
              The Personal Information which has been collected by us from
              various means and sources may be used to contact with you and
              sharing various information from time to time through newsletters,
              marketing or promotional materials and other information that may
              be of interest to you. We provide an unsubscribe link on our
              communication mails, You may opt out of receiving such mails if
              you wish to.
            </p>
            <br />
            <h6>Security</h6>
            <p>
              Security of your personal information is prime most important to
              us and we take every measure to protect it an absolute guarantee
              about it cannot be given from Future Scope Institute as no method
              of electronic storage or transfer is 100% secure.
            </p>
            <br />
            <h6>Links to Other Sites</h6>
            <p>
              If you click on a third party link, contained in our website you
              will be directed to that third party’s site which are not operated
              by Future Scope Institute. We encourage you to kindly visit the
              privacy policy of such site before sharing any of your personal
              information. Since Future Scope Institute has no control over such
              websites, we assume no responsibility for the content, privacy
              policies or practices of any third party sites or services.
            </p>
            <br />
            <h6>Children’s Privacy</h6>
            <p>
              We do not intend to collect any information of a child under the
              age of 14 (“Children”). If you are the parent or guardian of such
              children who has knowingly unknowingly shared with us his her
              personal data, you may contact us immediately for deletion of such
              data. Upon brought to notice we will remove such data from
              database immediately.
            </p>
            <br />
            <h6>Changes to This Privacy Policy</h6>
            <p>
              This policy will get updated from time to time. We will be
              notifying all our users of such changes by posting changed policy
              to our website. You are strongly advised to review our Privacy
              Policy periodically for any changes. Changes to this Privacy
              Policy become effective once they are posted on this page.
            </p>
            <br />
            <h6>Contact Us</h6>
            <p>
              Do contact us immediately if you have any questions on our privacy
              policy.
            </p>
          </div>
        </div>
      </Container>
      <div>
        <MenuFooter />
        <Footer />
      </div>
    </div>
  );
};
export default PrivacyPolicy;
