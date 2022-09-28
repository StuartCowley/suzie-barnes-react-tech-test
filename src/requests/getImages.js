import axios from "axios";

const getImages = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
            .get(`https://images-api.nasa.gov/search?q=${query}`)
            .then((response) => {
                const imageResults = response.data.collection.items
                // console.log(imageResults, "<=== imageResults")

                const parsedImages = imageResults.filter(function (ele) {
                    return ele.data[0].media_type === "image"
                })
                // console.log(parsedImages, "<=== parsedImages")
                const images = parsedImages.map(image => image.links[0].href)
                console.log(images, "<=== images")
                return images
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default getImages;