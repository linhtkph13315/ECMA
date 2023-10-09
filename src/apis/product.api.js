import Axios from "./instance";

export const getAllProducts = async () => {
    try {
        const { data } = await Axios.get("/products");
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getDetailProducts = async  (id) => {
    try {
        const { data } = await Axios.get("/products");
        return data.find((item) => item.id == id)
    } catch (error) {
        console.log(error);
    }
};

export const deleteProducts = async (id) => {
    try {
        const {data} = await Axios.delete(`/products/${id}`)

    } catch (error) {
        console.log(error)
    }
}