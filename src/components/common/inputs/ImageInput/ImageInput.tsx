import React, { FC, useRef, ChangeEvent, useState } from "react";

interface ImageInputInt {
  label: string;
  uploadTitle?: string;
  changeTitle?: string;
  onChange: Function;
}

const ImageInput: FC<ImageInputInt> = ({
  label,
  uploadTitle = "Add image",
  changeTitle = "Change image",
  onChange,
}) => {
  const [value, setValue] = useState<null | Blob>(null);

  const fileInput = useRef(null);

  const buttons = () => {
    if (!value) {
      return (
        <button
          className="input__upload-button"
          type="button"
          onClick={() => {
            if (fileInput !== null && fileInput.current !== null) {
              (fileInput.current as HTMLInputElement).click();
            }
          }}
        >
          {/* <Icon id="image" width="22" /> */}
          {uploadTitle}
        </button>
      );
    }
    return (
      <>
        <button className="input__remove-button" onClick={() => setValue(null)}>
          remove
        </button>
        <button
          className="input__upload-button"
          type="button"
          onClick={() => {
            if (fileInput !== null && fileInput.current !== null) {
              (fileInput.current as HTMLInputElement).click();
            }
          }}
        >
          {/* <Icon id="cancel" width="24" /> */}
          {changeTitle}
        </button>
      </>
    );
  };

  return (
    <div className="input">
      <label htmlFor="form-img">{label}</label>
      <div className="input__wrapper input__wrapper--short">
        <p className="input__temp-icon">temp</p>
        {buttons()}
      </div>
      <input
        type="file"
        name=""
        id=""
        ref={fileInput}
        accept="image/*"
        className=""
        onChange={async (e: ChangeEvent) => {
          e.preventDefault();
          if (
            e.target &&
            typeof (e.target as HTMLInputElement).files !== null
          ) {
            // @ts-ignore I don't know, why Typescript doesn't like the Guard Clause above,
            // it suggests that .files still might be null.
            const file = (e.target as HTMLInputElement).files[0];
            // @ts-ignore
            console.log((e.target as HTMLInputElement).files[0]);
            setValue(file);
            onChange({ file: file, fileName: file.name });
          }
        }}
      />
    </div>
  );
};

export default ImageInput;
