import {
  INPUT_ERROR_HEADER,
  INPUT_ERROR_CATEGORY,
  INPUT_ERROR_IMAGE,
  INPUT_ERROR_CONTENT,
} from "./dutchMessages";

const isFormInvalid = (
  title: string,
  category: number,
  file: { file: ArrayBuffer | Blob; fileName: string } | null,
  content: string
) => {
  if (!title) return INPUT_ERROR_HEADER;
  if (category === 0) return INPUT_ERROR_CATEGORY;
  if (!content) return INPUT_ERROR_CONTENT;
  if (!file) return INPUT_ERROR_IMAGE;
  return "";
};

const fetchHandler = async (
  url: string,
  options: {},
  dataRequired?: boolean
) => {
  let responseResult;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    if (dataRequired) {
      responseResult = await response.json();
    } else {
      responseResult = true;
    }
  } catch (e) {
    responseResult = null;
  } finally {
    return responseResult;
  }
};

export { isFormInvalid, fetchHandler };
