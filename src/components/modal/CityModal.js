import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalInfo from "./ModalInfo";
import ModalMap from "./ModalMap";
import ModalWeather from "./ModalWeather";

let aqicnKey;

if (process.env.NODE_ENV !== "production") {
  aqicnKey = process.env.REACT_APP_AQICN_KEY;
} else {
  aqicnKey = process.env.AQICN_KEY;
}

const CityModal = props => {
  const { location, uid } = props;

  const [modalOn, setModalOn] = useState(false);

  const [info, setInfo] = useState({});

  const toggleModal = () => {
    setModalOn(modalOn => !modalOn);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.waqi.info/feed/@${uid}/?token=${aqicnKey}`
      );
      res.json().then(res => {
        setInfo(res.data);
      });
    }
    fetchData();
  }, [modalOn]);

  return (
    <div>
      <Button type="button" onClick={toggleModal} className="btn btn-primary">
        Details
      </Button>

      <Modal
        isOpen={modalOn}
        toggle={toggleModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader toggle={toggleModal}>{location}</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col">
                <ModalInfo info={info} />
              </div>
              <div className="col-6">
                <ModalMap info={info} />
              </div>
            </div>
            <hr />
            <div className="bg-primary">
              <ModalWeather info={info} location={location} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleModal}>
            <i class="fas fa-long-arrow-alt-left"></i> Go Back
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CityModal;
