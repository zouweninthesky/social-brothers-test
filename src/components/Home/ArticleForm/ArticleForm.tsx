import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./ArticleForm.scss";

import TextInput from "../../common/inputs/TextInput/TextInput";
import Dropdown from "../../common/inputs/Dropdown/Dropdown";
import TextArea from "../../common/inputs/TextArea/TextArea";
import Button from "../../common/Button/Button";
import ImageInput from "../../common/inputs/ImageInput/ImageInput";

import CreateStore from "../../../store/createStore";

const ArticleForm = observer(() => {
  const { categories } = CreateStore;

  useEffect(() => {
    (async () => {
      CreateStore.reset();
      CreateStore.getCategories();
    })();
  }, []);
  return (
    <section className="article-form">
      <h3 className="article-form__header">Plaats een blog bericht</h3>
      <form action="" className="article-form__form">
        <TextInput label="Berichtnaam" placeholder="Geen titel" />
        {categories && <Dropdown label="Categorie" options={categories} />}
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
});

export default ArticleForm;
