const isFormInvalid = (
  title: string,
  category: number,
  file: { file: ArrayBuffer | Blob; fileName: string } | null,
  content: string
) => {
  if (!title) return "Whoops! Voeg berichtnaam toe aub!";
  if (category === 0) return "Whoops! Kies een categorie!";
  if (!content) return "Whoops! Gelieve bericht toe te voegen!";
  if (!file) return "Whoops! Voeg a.u.b. afbeelding toe!";
  return "";
};

export { isFormInvalid };
