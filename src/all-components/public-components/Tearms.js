import React from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import { Container } from "reactstrap";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";

const Tearms = () => {
  return (
    <div>
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />

      <div>
        <br />
        <div>
          <Container>
        <h5 className="text-center my-4">Terms & Conditions</h5><hr/>
            <h6>Terms & Conditions</h6>
            <p>
              This web page represents a legal document and is the Terms and
              Conditions (Agreement) for our website,
              future-scope-institute.github.io/oms (Website).By using our
              Website, you agree to fully comply with and be bound by the
              following Agreement each time you use our Website.
            </p>
            <br />
            <br />
            <h6>Definitions</h6>
            <p>
              The terms “us”, “we”, and “our” refer to Future Scope Training
              Institute, the owner of this Website. A “Visitor” is someone who
              merely browses our Website. The term “User” is a collective
              identifier that refers to either a Visitor or a Member. All text,
              information, graphics, design, and data offered through our
              Website or Services, whether produced by our Members or by us, are
              collectively known as our “Content”.
            </p>
            <br />
            <br />
            <h6>Limited License</h6>
            <p>
              We grant you a nonexclusive, nontransferable, revocable license to
              access and use our Website and Services strictly in accordance
              with this Agreement. Your use of our Website and Services is
              solely for internal, personal, noncommercial purposes unless
              otherwise provided for in this Agreement. No printout or
              electronic version of any part of our Website or Services may be
              used by you in any litigation or arbitration matter whatsoever
              under any circumstances.
            </p>
            <br />
            <br />
            <h6>Legal Compliance</h6>
            <p>
              You agree to comply with all applicable Indian Information
              Technology Act laws, statutes, ordinances, and regulations
              regarding your use of our Website, Content, Services, and any
              software provided therein.
            </p>
            <br />
            <br />
            <h6>Errors, Corrections, and Changes</h6>
            <p>
              We do not represent or otherwise warrant that our Website will be
              error-free or free from viruses or other harmful components, or
              that we will correct any errors. We do not represent or otherwise
              warrant that the information available on or through our Website
              will be correct, accurate, timely, or otherwise reliable. We
              reserve the right at our sole discretion to change any content,
              software, and other items used or contained in our Website or
              Services at any time without notice.
            </p>
            <br />
            <br />
            <h6>Payments</h6>
            <p>
              You represent and warrant that if you are purchasing/enrolling
              something from us, (i) any payment information you supply is true
              and complete, (ii) charges incurred by you will be honored by your
              bank or credit card company, (iii) you will pay the charges
              incurred by you at the posted prices, including any applicable
              taxes, and (iv) if your initial payment method is dishonored, you
              will still pay the incurred charges, including any surcharge we
              may incur due to the dishonored payment.
            </p>
            <br />
            <br />
            <h6>Changes to Our Terms and Conditions</h6>
            <p>
              We reserve the right to change these Terms and Conditions at any
              time by giving you advance notice of the changes by email or in
              writing. We will also post these changes on our website. These
              changes will become effective 30 days after receipt of the notice.
              Your continued use of our Website, Services, and Products after
              any change to these Terms and Conditions and our notifying you
              will constitute your acceptance of such change. If you do not
              agree with the changes to these Terms and Conditions, you can
              choose to discontinue the use of our Website, Services, and
              Products. If you have questions about our Terms of Use, please
              contact us at futurescopeinstitute.info@gmail.com and include
              “Terms of Use” in the subject.
            </p>
          </Container>
        </div><br/>
        <div >
          <MenuFooter />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Tearms;
