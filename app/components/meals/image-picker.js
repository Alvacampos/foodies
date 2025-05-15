"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState("");
  const imageInput = useRef();

  const handlePickImage = (event) => {
    imageInput.current.click();
    const file = event.target.files[0];
    if (!file) {
        setPickedImage(null);
        return;
    }
    const reader = new FileReader();

    setPickedImage(reader.result);
    
    reader.onload = () => {
        setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Meal Image"
              className={classes.image}
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          required
          ref={imageInput}
          onChange={handlePickImage}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickImage}
        >
          Select Image
        </button>
      </div>
    </div>
  );
}
