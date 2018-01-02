import jQuery from 'jQuery';

export default function formToJson(form) {
  const array = jQuery(form).serializeArray();
  const json = {};
  for (const item of array) {
    Object.assign(json, { [item.name]: item.value });
  }
  return json;
}
