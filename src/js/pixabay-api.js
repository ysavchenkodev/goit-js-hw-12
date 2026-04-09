//*  ======================================================

import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
}
    
);

//*  ======================================================

export async function getImagesByQuery(query, numberPage) {
    const params = {
        key: "35198109-82bb50fce237d8abfec2ac917",
        image_type: "photo",
        q: `${query}`,
        orientation: "horizontal",
        safesearch: "true",
        per_page: "15",
        page: `${numberPage}`
    }
    const result = await axios.get('', { params })
    return result.data
}

//*  ======================================================
