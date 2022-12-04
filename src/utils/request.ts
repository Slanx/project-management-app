type requestBody = BodyInit | null | undefined;
type HeadersType = {
  [key: string]: string;
};

export const request = async (
  url: string,
  method = 'GET',
  body: requestBody = null,
  headers: HeadersType = { 'Content-Type': 'application/json' }
) => {
  try {
    const response = await fetch(url, { method, body, headers });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};
