import axios from "axios";

export const primaryAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RECIPES_API_URL || 'https://dummyjson.com/',
})

export const secondaryAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://recipes-psi-six.vercel.app/',
})