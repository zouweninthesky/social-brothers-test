import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./ArticleForm.scss";

import TextInput from "../../common/inputs/TextInput/TextInput";
import Dropdown from "../../common/inputs/Dropdown/Dropdown";
import TextArea from "../../common/inputs/TextArea/TextArea";
import Button from "../../common/Button/Button";
import ImageInput from "../../common/inputs/ImageInput/ImageInput";
import Spinner from "../../common/Spinner/Spinner";

import { isFormInvalid } from "../../../utils/helperFunctions";
import { BUTTON_ADD_IMAGE, INPUT_SUCCESS } from "../../../utils/dutchMessages";

import CreateStore from "../../../store/createStore";
import Store from "../../../store";

const ArticleForm = observer(() => {
  const { categories } = CreateStore;
  const { loading } = Store;
  const [title, setTitle] = useState("");
  const [categoryID, setCategoryId] = useState({ id: 0, name: "" });
  const [file, setFile] = useState<null | {
    file: Blob;
    fileName: string;
  }>(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      CreateStore.reset();
      CreateStore.getCategories();
      Store.loadingStarted();
    })();
  }, []);
  return (
    <section className="article-form">
      <h3 className="article-form__header">Plaats een blog bericht</h3>
      {!categories && loading ? (
        <div className="article-form__spinner-wrapper">
          <Spinner width={160} />
        </div>
      ) : (
        <form action="" className="article-form__form">
          <TextInput
            label="Berichtnaam"
            placeholder="Geen titel"
            value={title}
            onInput={setTitle}
          />
          {categories && (
            <Dropdown
              label="Categorie"
              options={categories}
              value={categoryID}
              setValue={setCategoryId}
            />
          )}
          <ImageInput
            label="Header afbeelding"
            uploadTitle={BUTTON_ADD_IMAGE}
            value={file}
            setValue={setFile}
          />
          <TextArea label="Bericht" value={content} onInput={setContent} />
          <Button
            title="Bericht aanmaken"
            handleClick={async () => {
              setError("");
              const error = isFormInvalid(title, categoryID.id, file, content);
              if (error === "" && file !== null) {
                const isSuccessful = await CreateStore.createPost(
                  title,
                  content,
                  categoryID.id,
                  file
                );
                if (isSuccessful) {
                  setSuccess(true);
                  setTitle("");
                  setCategoryId({ id: 0, name: "" });
                  setFile(null);
                  setContent("");
                  setTimeout(() => {
                    setSuccess(false);
                  }, 2000);
                } else {
                  Store.errorOccured();
                }
              } else {
                setError(error);
              }
            }}
          />
          {error && <p className="article-form__error-message">{error}</p>}
          {success && (
            <p className="article-form__success-message">{INPUT_SUCCESS}</p>
          )}
        </form>
      )}
    </section>
  );
});

export default ArticleForm;
