import React from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <div>
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />
      <div>
        <Container>
            <h5 className="text-center my-4">Refund Policy</h5><hr/>
          <p>
            At the outset we Team Future Scope Institute would like to thank you
            for enrolling in classroom training. We try our best that we to
            provide a seamless experience for all our users while they learn,
            assess, and enroll in our classroom training.
          </p>
          <br />
          <p>
            There are terms and conditions that govern the Refund Policy in case
            of enrolling in one of our classroom training. When any student
            enrolls into any of our classroom training by paying online you
            agree to our Privacy Policy, Terms of Use and refund policy.
          </p>
          <br />
          <h6>Price Matching</h6>
          <p>
            At Future Scope Institute, we are steadfast to offer you the best
            possible prices.
          </p>
          <br />
          <h6>Pricing Errors</h6>
          <p>
            While we try to minimize any error on our website, one off incident
            may happen. If in case you are charged higher for a classroom
            training price which is higher than the price displayed on the
            website, we will cancel your order of that training and notify you
            of the cancellation or else adjust the amount against classroom
            training and refund the balance
          </p>
          <br />
          <h6>Resale Prohibited</h6>
          <p>
            Our service through our online payment method is meant only for
            personal use and references and not for resale. Therefore, if we
            believe your enrollment is not for personal use we may refuse to
            enroll in classroom training or services.
            <br />
            Payment once made cannot be transferred to another person.
          </p>
          <br />
          <h6>Cancellation and Refunds policy:</h6>
          <p>
            Classroom/Online Training programs are primarily non-refundable.
            However, 50% of the fees paid can be refunded if refund request is
            commences within 10 days after admission taken with valid reason.
            Our Customer Service executives and counselors are ready to assist
            you—simply call +91 9284465209 between 11 am to 5 pm in weekdays
            alternatively you can also write to
            futurescopeinstitute.info@gmail.com
            <br />
            Future Scope Institute reserves the right to postpone/cancel an
            event, or change the location of an event because of insufficient
            enrolments, instructor illness or force majeure events (like floods,
            earthquakes, political instability, etc.) In such cases the fees
            collected from students will be refunded without any interest within
            10 days of such cancellation.
          </p>
          <br />
          <ListGroup numbered flush>
            <ListGroupItem>
              Loan cases subvention charges will be deducted.
            </ListGroupItem>
            <br />
            <ListGroupItem>
              Cancellation of admission charge will be 5000
            </ListGroupItem>
            <br />
            <ListGroupItem>
              Cancellation charges for Loan cases admission are 7500
            </ListGroupItem>
            <br />
            <ListGroupItem>
              If the refund is intimated before 10 days, fees will be refunded
              by deducting cancellation charges.
            </ListGroupItem>
            <br />
            <ListGroupItem>
              50% of the fee amount will be refunded if the refund is initiated
              after 10 days and before 30 days of admission. (Cancellation
              charges also will be deducted)
            </ListGroupItem>
            <br />
            <ListGroupItem>No refund will be done after 30 days.</ListGroupItem>
            <br />
          </ListGroup>
          <h6>Duplicate payment:</h6>
          <p>
            In case of duplicate payment made by student due to payment gateway
            error or any other reason, we would refund the duplicate amount thus
            received within 10 days of intimation to us from student.
          </p>
        </Container>
      </div>
      <div>
        <MenuFooter />
        <Footer />
      </div>
    </div>
  );
};
export default RefundPolicy;
