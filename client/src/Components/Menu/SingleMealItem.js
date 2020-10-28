import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalBody from "./ModalBody";

const SingleMealItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState([]);
  const [ingr, setIngr] = useState([]);
  const openModal = (e) => {
    setName(e.currentTarget.value);

    props.data.map((a) => {
      if (a.name === e.currentTarget.value) {
        let items = Object.keys(a.description);
        setDescription(items);
        setIngr(a.description);
        setPrice(a.price);
      }
    });

    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  return (
    <div className="meals-list">
      {props.data.map((a, b) => (
        <div key={b} className="single-item">
          <div className="meal-description-div">
            <h4 className="meal-description">{a.name}</h4>
            <div>
              {Object.keys(a.description).map((key, index) => {
                return (
                  <span className="desc-single-ingredient" key={index}>
                    {key.charAt(0).toUpperCase() + key.substring(1)}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="meal-price-h4">{a.price}$</h4>
            <div className="add-to-cart-div">
              <button
                className="openModal"
                onClick={(e) => openModal(e)}
                value={a.name}
              >
                Add To Cart
              </button>
              <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="example modal"
                style={customStyles}
              >
                <ModalBody
                  name={name}
                  description={description}
                  price={price}
                  ingredients={ingr}
                  handleLocalAdding={props.handleLocalAdding}
                  closeModal={closeModal}
                />
              </Modal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SingleMealItem;

// on click add, open modal and let choose from ingredients, then next button save to database
