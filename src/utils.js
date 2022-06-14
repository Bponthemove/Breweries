export const endpoint = query => {
    //convert city to string without spaces
    if (typeof(query) === 'string') return `?by_city=${query.trim().replace(/ /g,"_")}&per_page=20`;
    else return `?by_dist=${query.lat},${query.lng}&per_page=20`;
};

export const getPosition = (options) => {
    //make sure that locating returns a promise so that we can await it and then act on its response.
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);       
    });
}