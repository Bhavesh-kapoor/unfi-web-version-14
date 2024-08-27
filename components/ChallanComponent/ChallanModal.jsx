import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "react-multi-carousel/lib/styles.css";
import { CloseIcon } from "@/common/IconsSvg";

const ChallanModal = ({ challanData, open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}>
        <div style={{ flex: "1", overflowY: "auto", padding: "8px" }}>
          <Box sx={style} className="bg-white">
            <div
              style={{
                flex: "none",
                textAlign: "right",
                paddingRight: "8px",
                paddingTop: "8px",
              }}>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Challan Details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {challanData.map((challan) => (
                <div key={challan.challanNumber} className="mb-4">
                  <p>
                    <strong>Challan Number:</strong> {challan.challanNumber}
                  </p>
                  <p>
                    <strong>Offense Details:</strong> {challan.offenseDetails}
                  </p>
                  <p>
                    <strong>Challan Date:</strong> {challan.challanDate}
                  </p>
                  <p>
                    <strong>Amount:</strong> {challan.amount}
                  </p>
                  <p>
                    <strong>Status:</strong> {challan.challanStatus}
                  </p>
                  <a
                    href={challan.payment_url}
                    className="text-blue-500"
                    target="_blank"
                    rel="noreferrer">
                    Pay Now
                  </a>
                </div>
              ))}
            </Typography>
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default ChallanModal;
