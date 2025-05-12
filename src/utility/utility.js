import axios from "axios"

export const uploadImgOnImageBB = async (img) => {
    let formdata = new FormData()
    formdata.append('image', img)

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`, formdata)
    console.log('uploadImgOnImageBB', data);

    return data
}