import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalInfo from "./ModalInfo";
import ModalMap from "./ModalMap";
import ModalWeather from "./ModalWeather";

const aqicnKey = process.env.REACT_APP_AQICN_KEY;

const CityModal = props => {
  const { location, uid } = props;

  const [modalOn, setModalOn] = useState(false);

  const [info, setInfo] = useState({});

  const toggleModal = () => {
    setModalOn(modalOn => !modalOn);
  };

  useEffect(() => {
    // memory leak cleanup
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      const res = await fetch(
        `https://api.waqi.info/feed/@${uid}/?token=${aqicnKey}`,
        { signal: signal }
      );
      res
        .json()
        .then(res => {
          setInfo(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    fetchData();
    return function cleanup() {
      abortController.abort();
    };
  }, [modalOn, uid]);

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
            <i className="fas fa-long-arrow-alt-left"></i> Go Back
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CityModal;
