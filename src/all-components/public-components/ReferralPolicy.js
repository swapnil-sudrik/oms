import React from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import { Container, ListGroup, ListGroupItem, Table } from "reactstrap";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";

const ReferralPolicy = () => {
  return (
    <div>
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />
      <div>
        <h5 className="text-center my-4">Referral Policy</h5>
        <hr />
        <Container>
          <div>
            <h6>TERMS & CONDITIONS</h6>
            <p>
              This Referral policy applies to users who are participating in
              Future Scope Institute Referral Scheme. Your participation in the
              Scheme is deemed if (a) you share your referee details with others
              by any means whatsoever, or (b) you use another’s referee details
              in your application. By participating in this Scheme, you
              acknowledge and agree to be bound by all of the terms and
              conditions of this referral policy, which are in addition to and
              subject to Future Scope Institute "Terms & Conditions" available
              on the Platform. If you do not agree to this Policy, please do not
              participate in the Scheme. Future Scope Institute Education
              reserves the right to modify or terminate the Scheme, in whole or
              in part, at any time and in any manner.
            </p>
            <br />
            <h6>Definitions</h6>
            <p>
              <b>"Non-paid Referrer" &nbsp;</b>means an Future Scope Institute
              user who has not paid the block amount for an Future Scope
              Institute Program and making the reference.
              <br />
              <b>"Paid Referrer"&nbsp;</b> means an Future Scope Institute who
              has paid the block amount for an Future Scope Institute Program
              and making the reference.
              <br />
              <b>"Referrer" &nbsp;</b>means either a Paid Referrer or a Non-paid
              Referrer.
              <br />
              <b>"Friend"&nbsp;</b> means the individual being referred by a
              Referrer.
              <br />
              <b>"Referral Form"&nbsp;</b> is the form where the Referrer
              submits his own application or otherwise in a manner decided by
              Future Scope Institute.
              <br />
              <b>"Reward"&nbsp;</b> means the benefit receivable under this
              policy, in the form of cash, vouchers or fee waivers, as the case
              may be.
              <br />
            </p>
            <br />
            <h6>Eligibility :</h6>
            <p>
              <ListGroup numbered flush>
                <ListGroupItem>
                  Referral amount is eligible if referral done with the
                  admission by Referee of Institute’s Student (Including Current
                  or Alumni).
                </ListGroupItem>
                <br />
                <ListGroupItem>
                  For referral amount Eligibility, Referral students have to pay
                  50% of his fees payment after that only Referral amount will
                  get handed over to the referee Student.
                </ListGroupItem>
                <br />
              </ListGroup>
            </p>
            <br />
            <h6>Criteria</h6>
            <p>
              The Referrer must fill the referral form with proper details of
              his/her Friend. Future Scope Institute shall not accept the
              Referee any time after the admission is made by that referee.
              Additionally, the Friend must pay the entire fee amount for the
              Referral to be considered completed.
              <br />
              <ListGroup numbered flush>
                <ListGroupItem>
                  Referral amount can be divided between referee and referral as
                  per their mutual communication
                </ListGroupItem>
                <br />
                <ListGroupItem>
                  If a referee student wants to give his Referral amount in the
                  form of a discount to a referral student it can be considered
                  in fess criteria
                </ListGroupItem>
                <br />
              </ListGroup>
            </p>
            <br />
            <h6>Group admission Criteria</h6>
            <p>
              <ListGroup numbered flush>
                <ListGroupItem>
                  For a group admission of 3 to 5 candidates, Extra 5% discount
                  will be given in Individual’s fees payment
                </ListGroupItem>
                <br />
                <ListGroupItem>
                  For a Group admission, more than 5, candidates, Extra 10%
                  discount will be given on in individuals fees payment
                </ListGroupItem>
                <br />
              </ListGroup>
            </p>
            <br />
            <h6>Visitors Are most welcome</h6>
            <p>
              For "not - Future Scope Institute" Students or visitors are
              eligible for Referral Scheme , As they can get a Special cash
              Voucher after receiving 50% fees amount of referral Student and
              submitting proper documentation.
            </p>
            <br />
            <h6>Value & Disbursement of Reward-</h6>
            <p>
              The amount of Reward receivable to a Referrer is dependent on
              which program a referee is applying for.
            </p>
            <br />
            <h6>Referee Reward</h6>
            <p>
              The Friend’s Reward shall be a fee waiver on the program fees and
              shall be determined on the basis of the program which the Friend
              has registered and paid for. The fee waiver shall be applied to
              the balance payment stage and not at the time of block payment.
              <br />
              Program wise value of the Reward is provided in the table below:
            </p>
            <br />
            <Table bordered>
              <thead>
                <tr>
                  <th>Program Name</th>
                  <th> Referral Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Master in Data Software Engineering</td>
                  <td> 5000</td>
                </tr>
                <tr>
                  <td>Masters in Full Stack Development</td>
                  <td> 5000</td>
                </tr>
                <tr>
                  <td>Masters in Aws Cloud Technology</td>
                  <td> 5000</td>
                </tr>
                <tr>
                  <td>Masters in Data Science & Analytics with AI</td>
                  <td> 5000</td>
                </tr>
              </tbody>
            </Table>
            <br />
            <p>
              Any Reward in the form of a fee waiver shall be calculated on the
              program fees plus all applicable taxes. We have provided an
              example below:
              <br />
              <br />
              Program Fees: INR 1,00,000
              <br />
              Taxes @18%: INR 18,000
              <br />
              Total: INR 1,18,000
              <br />
              Application of Reward: (-) INR 5,900
              <br />
              Grand Total payable post Reward: INR 1,12,1000
              <br />
            </p>
            <br />
            <h6>Other points to be noted:-</h6>
            <p>
              <ListGroup numbered flush>
                <ListGroupItem>
                  Existing students / Alumni who enrol themselves for a new
                  program are eligible to receive the Reward amount mentioned in
                  the table in the form of a fee waiver, which shall be
                  determined basis the new program he/she has enrolled for
                </ListGroupItem>
                <br />
                <ListGroupItem>
                  The benefits under this policy cannot be clubbed with any
                  other scholarship/fee waiver or benefit. If you have already
                  availed another benefit, the benefits of this policy shall not
                  apply. For further clarity, please check with your counsellor.
                </ListGroupItem>
                <br />
                <ListGroupItem>
                  In case the Reward is a cash payout, bank transfer will take 7
                  bank days with duly filled bank details in case.
                </ListGroupItem>
                <br />
                <ListGroupItem>
                  Source of referee: There will be a check of the source of the
                  Friend and of whether the Referrer used any marketing channel
                  or through Referrer himself/herself.
                </ListGroupItem>
                <br />
              </ListGroup>
            </p>
          </div>
        </Container>
      </div>
      <div>
        <MenuFooter />
        <Footer />
      </div>
    </div>
  );
};
export default ReferralPolicy;
