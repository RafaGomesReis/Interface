import { data } from "../data";

export const getCategories = () => {
    return data.categories;
}

export const getCategoriesById = (id: number) => {
    return data.categories.find(item => item.id === id);
}