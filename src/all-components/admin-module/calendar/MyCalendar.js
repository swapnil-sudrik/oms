import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Modal, ModalHeader, ModalBody, Button} from "reactstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AdminNavigation from "../home/AdminNavigation";
// import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    category: "primary",
  });

  const handleTitleChange = (e) => {
    setNewEvent({ ...newEvent, title: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setNewEvent({ ...newEvent, category: e.target.value });
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const eventStart = moment(newEvent.start).startOf("day").toDate();
    const eventEnd = moment(newEvent.start).endOf("day").toDate();
    setEvents([
      ...events,
      { ...newEvent, id: events.length + 1, start: eventStart, end: eventEnd },
    ]);
    setShowAddEventModal(false);
    setNewEvent({ title: "", start: "", end: "", category: "primary" });
  };

  const handleSelectSlot = (slotInfo) => {
    setNewEvent({ ...newEvent, start: slotInfo.start });
    setShowAddEventModal(true);
  };

  return (
    <div>
      <AdminNavigation />
      <div className="my-1 py-1 text-center bg-warning my-margin">
        <h4>Admin Dashboard</h4>
      </div>
      <div style={{ marginLeft: "63px" }} className="my-1 py-3 px-3">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          onSelectSlot={handleSelectSlot}
          style={{ height: 500 }}
        />
        <Modal
          isOpen={showAddEventModal}
          toggle={() => setShowAddEventModal(false)}
          centered
        >
          <ModalHeader toggle={() => setShowAddEventModal(false)}>
            Add Event
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleEventSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  value={newEvent.title}
                  onChange={handleTitleChange}
                />
              </div><br/>
              <div className="form-group text-center">
                <Button color={newEvent.category} type="submit">
                  Save
                </Button>{" "}
                <Button
                  color="secondary"
                  onClick={() => setShowAddEventModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default MyCalendar;
