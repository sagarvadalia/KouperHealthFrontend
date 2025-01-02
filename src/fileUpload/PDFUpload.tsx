import { Box, Typography } from "@mui/material";
import { generateUploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

export const PDFUpload = () => {
  // const UploadButton = generateUploadButton()
  const UploadDropzone = generateUploadDropzone({});

  return (
    <Box>
      <Typography variant="h6">Upload PDF</Typography>
      <UploadDropzone
        endpoint="pdfUploader"
        config={{ mode: "auto" }}
        content={{ allowedContent: "application/pdf" }}
        appearance={{
          allowedContent: { color: "#666666" },
        }}
        onClientUploadComplete={(res) => {
          console.log("Upload completed:", res);
        }}
        onUploadError={(error) => {
          console.error("Upload error:", error.message);
        }}
        onUploadBegin={(fileName) => {
          console.log("Upload starting:", fileName);
        }}
      />
    </Box>
  );
};
