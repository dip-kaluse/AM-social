import axios from "axios";
import React, { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";

function AddFeed() {
  const [files, setFiles] = useState("");
  useEffect(() => {
    files != "" &&
      axios("http://192.168.0.120:3000/api/feed/upload", {
        method: "POST",
        data: files,
      });
  }, [files]);
  console.log(files);
  return (
    <div>
      <FileUpload onChange={(e) => setFiles({ image: File })} />
    </div>
  );
}

export default AddFeed;
