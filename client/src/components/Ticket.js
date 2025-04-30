import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

// Composant qui reçoit des props pour afficher les détails d’un billet
const Ticket = ({ _id, seates_zone, totalprice, quantity }) => {
  const navigate = useNavigate();

  // Fonction appelée lors du clic sur le bouton pour aller à la page de paiement
  const payerVotreBillet = () => {
    navigate(`/payment/${_id}`);
  };

  return (
    <>
      <div className="cards">
        <Card style={{ width: "25rem", margin: "auto", marginBottom: "10px" }}>
          <Card.Body>
            <Card.Title>{seates_zone}</Card.Title>
            <hr />
            <Card.Text>
              Quantité en stock :
              <span style={{ textDecorationLine: "underline" }}>
                {quantity}
              </span>
              <br />
              <br />
              <span style={{ fontFamily: "impact" }}>
                Prix : {totalprice} DT
              </span>
            </Card.Text>
            <Button variant="primary" onClick={payerVotreBillet}>
              Payer votre billet
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Ticket;