import React from "react";
import { setError, setMessage } from "../../store/StoreAction";
import {
  consoleLog,
  devApiUrl,
  fetchFormData,
} from "../helpers/functions-general";

const useUploadPhoto = (url, dispatch) => {
  const [photo, setPhoto] = React.useState(null);

  const uploadPhoto = async () => {
    if (photo) {
      const fd = new FormData();
      fd.append("photo", photo);

      const data = await fetchFormData(devApiUrl + url, fd, dispatch);

      consoleLog(data);
    }
  };

  const handleChangePhoto = (e) => {
    consoleLog(e.target.files[0]);

    if (!e.target.files[0]) {
      setPhoto("");
      dispatch(setError(false));
      return;
    }

    const file = e.target.files[0];
    //     consoleLog(file);
    //     const blobURL = URL.createObjectURL(file);
    //     const img = new Image();
    //     img.src = blobURL;
    //     const canvas = document.createElement("canvas");
    //     const ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0, 380, 185);
    //     canvas.toBlob(function(blob){
    //       console.info(blob.size);
    //       var f2 = new File([blob], fileName + ".jpeg");
    //       var xhr = new XMLHttpRequest();
    //       var form = new FormData();
    //       form.append("fileToUpload", f2);
    //       xhr.open("POST", "upload.php");
    //       xhr.send(form);
    // }, 'image/*', 0.5);

    //     console.log(ctx);
    //     console.log(canvas);
    //     console.log(img);
    // if (img.size > 5000) {
    //   dispatch(setError(true));
    //   dispatch(
    //     setMessage(
    //       "Photo is too big. It should be less than 5Kb and 80x80px size for better result."
    //     )
    //   );
    // } else {
    // dispatch(setError(false));
    consoleLog("Set photo");
    setPhoto(file);
    // }
  };

  return { uploadPhoto, handleChangePhoto, photo };
};

export default useUploadPhoto;
