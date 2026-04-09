//*  ======================================================

import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
}
    
);

//*  ======================================================

export function getImagesByQuery(query) {
    const params = {
        key: "35198109-82bb50fce237d8abfec2ac917",
        image_type: "photo",
        q: `${query}`,
        orientation: "horizontal",
        safesearch: "true"
    }
    return axios.get('', { params }).then((res) => { return res.data });
}

//*  ======================================================
