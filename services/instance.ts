import axios from "axios";

export const primaryAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RECIPES_API_URL,
})

export const secondaryAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})