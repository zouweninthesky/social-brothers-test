import React, { FC, useRef, ChangeEvent } from "react";

import Icon from "../../../common/Icon/Icon";

interface ImageInputInt {
  label: string;
  value: null | { file: Blob; fileName: string };
  uploadTitle?: string;
  setValue: Function;
}

const ImageInput: FC<ImageInputInt> = ({
  label,
  uploadTitle = "Add image",
  value,
  setValue,
}) => {
  const fileInput = useRef(null);

  const buttons = () => {
    if (!value) {
      return (
        <>
          <Icon id="camera" width={13} />

          <button
            className="input__upload-button"
            type="button"
            onClick={() => {
              if (fileInput !== null && fileInput.current !== null) {
                (fileInput.current as HTMLInputElement).click();
              }
            }}
          >
            {uploadTitle}
          </button>
        </>
      );
    }
    return (
      <>
        <p className="input__name-preview">{`${value.fileName.slice(
          0,
          6
        )}...`}</p>
        <button
          className="input__icon-button input__icon-button--with-css-icon"
          onClick={() => {
            setValue(null);
          }}
        ></button>

        <button
          className="input__icon-button"
          type="button"
          onClick={() => {
            if (fileInput !== null && fileInput.current !== null) {
              (fileInput.current as HTMLInputElement).click();
            }
          }}
        >
          <Icon id="restart" width={17} />
        </button>
      </>
    );
  };

  return (
    <div className="input">
      <label htmlFor="form-img">{label}</label>
      <div className="input__wrapper input__wrapper--short">{buttons()}</div>
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
            setValue({ file: file, fileName: file.name });
          }
        }}
      />
    </div>
  );
};

export default ImageInput;
