import React from "react";
import WelcomeNavigation from "./WelcomeNavigation";
import MenuFooter from "./MenuFooter";
import Footer from "./Footer";
import { Container, ListGroup, ListGroupItem, Table } from "reactstrap";

const PlacementPolicy = () => {
  return (
    <div>
      <WelcomeNavigation url="/login" btnName="Login" class="fa-backward" />
      <div className="my-3">
        <div>
          <Container>
        <h5 className="text-center my-4">Placement Policy</h5><hr/>
            <p>
              Dear Student, At Future Scope Institute help you achieve your
              dream career goals by providing IT job training and placement .
              For that, learners go through master class training (classroom or
              live instructor-led) in the beginning. They are trained on various
              modules through classroom or instructor-led classes, assessments,
              hands-on projects, etc.
            </p>
            <br />
            <br />
            <p>
              We track the learner's progress very closely during the entire
              training period through our own created backend portal “PULSE”. We
              track the progress by assessing their engagement in the program
              (Attendance of the sessions Live + Self Learning) and performance
              in Quizzes, Exams, Assignments, and Projects
            </p>
            <br />
            <br />
            <p>
              Our mission is to care utmost for student’s career transformation
              by delivering the most practical training under a disciplined
              framework. According to our disciplinary approach, we have certain
              terms and conditions that help you to achieve your great career
              goal.
            </p>
            <br />
            <br />
            <Table bordered>
              <thead>
                <tr>
                  <th>Profiles</th>
                  <th>Min. Package Commitment</th>
                  <th>Highest Package Commitment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Data Scientist / ML Engineer/ DL Engineer / NLP
                    Engineer/Data Engineer
                  </td>
                  <td>3 LPA</td>
                  <td>12LPA</td>
                </tr>
                <tr>
                  <td>Data Analysis / Power BI Developer/Tableau Developer</td>
                  <td>2.4 LPA</td>
                  <td>12 LPA</td>
                </tr>
                <tr>
                  <td>Full Stack Developer / Python / Java / Web Developer</td>
                  <td>1.8 LPA</td>
                  <td>8 LPA</td>
                </tr>
                <tr>
                  <td>UI / SQL / Angular /React / Node Developer</td>
                  <td>2.4 LPA</td>
                  <td>6 LPA</td>
                </tr>
                <tr>
                  <td>Solution architecture /AWS / Azure</td>
                  <td>3.6 LPA</td>
                  <td>12 LPA</td>
                </tr>
              </tbody>
            </Table>
            <br />
            <br />
            <h4>Terms and Conditions of 100% Job Guarantee:</h4>

            <ListGroup numbered flush>
              <ListGroupItem>
                Attendance should be above 90% in all classroom/online sessions.
                If a lecture is missed then that can be covered by informing the
                same to the co-ordinator for attending it in other batches. A
                maximum of 12 hours of lectures can be attended in other batches
                in the entire course.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Assignments, Quizzes and Self learning should be completed 100%
                and before the deadlines.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Assessment will be conducted from time to time where the
                candidate needs to score 80% aggregate. Re-tests will be
                available to increase the score.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Candidates need to have 100% attendance for Profile building
                sessions.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Projects assigned by faculty should be live/deployed to the
                production environment as demonstrated by the faculty. Any
                doubts should be raised to faculty from time to time. Failing to
                submit the projects within time will delay the completion of the
                course.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                The Candidate cannot switch the batch once he/she is admitted.
                However, he/she may be given special exemption under medical and
                education (exams) grounds subjected to approval from the
                Academic coordinator. In case of batch change an additional
                batch change processing fee of ₹ 5,000/- will have to be paid.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Completion of the course is marked when the candidate has
                completed all the modules along with the assignment, assessment,
                and submits the final project given by the faculty for that
                module. A final certificate will be issued at the end of the
                course
              </ListGroupItem>
              <br />
              <ListGroupItem>
                To mark a candidate as Job ready he/she must have paid 100% of
                the course fee.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Future Scope Institute will not be responsible for any type of
                commitments if the course is being delayed by the Student's side
                for any reason. Also if they have started their Master’s degree
                in between the course causing course delay/ Placements delay.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Candidates can only apply for a break ( Max 30 days ) in case of
                exams, medical emergency or any valid considerate reason
                approved in written by the Branch Manager.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                If candidate takes a break of more than 15 days without prior
                written consent approved by the Branch Manager, the mode of
                training will be automatically shifted to online.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Candidates have to attend all interviews provided by Future
                Scope Institute . If a candidate is not interested to attend an
                interview he/she should take approval from the placement
                coordinator through email.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Students pursuing regular degree courses are eligible for Job
                Guarantee agreement only after 180 days of completion of
                Graduation.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                If the candidate fails to attend 2 or more interviews arranged
                by Future Scope Institute, he/she will be barred from the
                placement (100% Job Guarantee) process.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Future Scope Institute would not be responsible if the candidate
                leaves the company or if the employer is terminating the
                candidate for poor performance or misbehavior.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                The 100% Job guarantee package does not include a specific
                amount of salary to the candidate, since the salary negotiation
                has to be done by candidates in their interview process.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Once a candidate decides to join any company (whether
                self-placed or placed through Future Scope Institute), he/she
                will not be eligible for the next job through Future Scope
                Institute under the 100% job guarantee program.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Future Scope Institute will refund job guarantee fees collected
                from the candidate if we fail to give placement within 6 months
                (180 days) after being marked as job ready.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Job Guarantee would stand cancelled if the candidate opts for
                further higher education
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Future Scope Institute reserves the right to use candidate’s
                placement data (whether self-placed or placed through Future
                Scope Institute), pictures and videos for promotion and
                marketing purposes on all print / digital media
              </ListGroupItem>
            </ListGroup>
            <br />
            <p>
              We are very serious about our commitment to students. Once we mark
              candidates “Job ready” from that day onwards you get eligible to
              get Job Openings from our side. After the candidate is job-ready,
              we have 180 days to place you in a good company. If we fail to
              place you in 180 days we will refund your tuition fees (excluding
              18% GST) within 15 days. To be eligible for refund candidates need
              to make sure that they haven’t violated any of the following
              criteria
            </p>
            <ListGroup numbered flush>
              <ListGroupItem>
                Candidates haven’t gone on a break after being marked as “Job
                Ready”
              </ListGroupItem>
              <br />
              <ListGroupItem>
                If a candidate rejects a job offer from IT placement companies
                where he/she got selected
              </ListGroupItem>
              <br />
              <ListGroupItem>
                If the candidate accepts any other Job (whether self-placed or
                placed through Future Scope Institute) in between the period of
                180 days.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                Behavior issues – not turning up for interviews, terminated by
                the IT placement companies post onboarding due to poor work
                performance, unprofessional behavior with the recruiting
                companies or our placement team
              </ListGroupItem>
              <br />
              <ListGroupItem>
                The interviews will be scheduled based on the inputs given to
                the placement team and the technical skills and eligibility
                criteria from IT placement companies. The candidate must
                complete the process requirements such as submitting machine
                tests, appearing for aptitude tests, etc. on time, and attending
                scheduled interviews.
              </ListGroupItem>
              <br />
              <ListGroupItem>
                If you are not interested in applying for jobs
              </ListGroupItem>
              <br />
            </ListGroup>
            <p>
              Mentors will mark candidates “Job ready” if he/she is eligible as
              per above criterias.
            </p>
          </Container>
        </div>
      </div>
      <div>
        <MenuFooter />
        <Footer />
      </div>
    </div>
  );
};
export default PlacementPolicy;
