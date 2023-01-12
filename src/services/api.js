const parseJson = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const request = async (url) => {
  const response = await fetch(url);
  return parseJson(response);
};

const fetchUnitList = () => {
  let url = "http://localhost:8080/unit";
  return request(url);
};

export const loadUnitList = async () => {
  const response = await fetchUnitList();
  console.log(response);
};
