import {   Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { generateUploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
export const PDFUpload = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // using the uploadthing library to upload the pdf to the uploadthing server
  const UploadDropzone = generateUploadDropzone();



  return (
    <div className={classes.container}>
      <Typography variant="h6">Upload PDF</Typography>
      <UploadDropzone
        endpoint="pdfUploader"
        config={{ mode: "auto" }}
        content={{ allowedContent: "application/pdf" }}
        appearance={{
          allowedContent: { color: "#666666" },
        }}
        onClientUploadComplete={() => {
          toast.info("Upload completed");
          navigate("/patients");
        }}
        onUploadError={(error) => {
          toast.error("Upload error: " + error.message);
        }}
        onUploadBegin={(fileName) => {
          console.log("Upload starting:", fileName);
        }}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
   marginTop: 20,
  },
}));



