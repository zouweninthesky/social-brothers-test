import React from "react";

import TextInput from "../../common/inputs/TextInput/TextInput";
import Dropdown from "../../common/inputs/Dropdown/Dropdown";
import "./ArticleForm.scss";

const ArticleForm = () => {
  return (
    <section className="article-form">
      <h3 className="article-form__header">Plaats een blog bericht</h3>
      <form action="" className="article-form__form">
        <TextInput label="Berichtnaam" placeholder="Geen titel" />
        <Dropdown
          label="Categorie"
          options={[
            { name: "", dutchName: "Geen categorie" },
            { name: "Tech", dutchName: "Tech" },
            { name: "Medicine", dutchName: "Medicine" },
          ]}
        />
        <div>
          <label htmlFor="form-img">Header afdbeelding</label>
          <input id="form-img" type="file" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="form-content">Bericht</label>
          <textarea id="form-content" name=""></textarea>
        </div>
      </form>
    </section>
  );
};

export default ArticleForm;

{
  /* <input
          type="file"
          name=""
          id=""
          ref={fileInput}
          accept="image/*"
          className="modal__upload-button"
          onChange={async (e) => {
            e.preventDefault();
            const reader = new FileReader();
            console.log(e.target.files[0]);
            reader.readAsArrayBuffer(e.target.files[0]);
            reader.onload = () => {
              console.log(reader.result);
              EditorImagesStore.addCommentImage(
                reader.result,
                e.target.files[0].name
              );
              EditorStepStore.saveStepDescriptionImage();
            };
          }} */
}
