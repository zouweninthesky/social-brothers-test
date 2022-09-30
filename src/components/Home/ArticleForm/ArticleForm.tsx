import React from "react";
import "./ArticleForm.scss";

import TextInput from "../../common/inputs/TextInput/TextInput";
import Dropdown from "../../common/inputs/Dropdown/Dropdown";
import TextArea from "../../common/inputs/TextArea/TextArea";
import Button from "../../common/Button/Button";
import ImageInput from "../../common/inputs/ImageInput/ImageInput";

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
            { name: "Medicine", dutchName: "Medizin" },
          ]}
        />
        <ImageInput label="Header afdbeelding" />
        <TextArea label="Bericht" />
        <Button
          title="Bericht aanmaken"
          onClick={() => {
            console.log(1);
          }}
        />
      </form>
    </section>
  );
};

export default ArticleForm;
