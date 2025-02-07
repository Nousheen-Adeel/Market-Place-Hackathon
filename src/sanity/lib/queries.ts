import { groq } from "next-sanity";

export const allProducts= groq`*[_type == "product"]`;
export const three = groq `*[_type == "product"] [0..2]`
export const four = groq `*[_type == "product"] [0..3]`