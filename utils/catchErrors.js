function catchErrors(error, displayError) {
    let errorMsg;
    if (error.response) {
        // the request was made and the server responded with a status code that is not in the range of 2XX
        errorMsg = error.response.data;

        // for cloudinary image upload
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        // The request was made, but no response was recieved
        errorMsg = error.request;
    } else {
        // Something else happened on making the request that triggered an error
        errorMsg = error.message;
    }
    displayError(errorMsg)
}

export default catchErrors;