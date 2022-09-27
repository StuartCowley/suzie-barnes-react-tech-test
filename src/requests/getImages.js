import axios from "axios";

const getImages = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
            .get(`https://images-api.nasa.gov/search?q=${query}`)
            .then((response) => {
                // const imageResults = response.data.collection.items
                // console.log(imageResults)
                // const parsedImages = imageResults.data[0].filter(media_type => media_type === "image")
                // const images = parsedImages.map(image => image.links[0].href)
                // return images
                console.log(response.data.collection.items)
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default getImages;