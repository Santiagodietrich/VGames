export default function Validation(inputs) {
    const regexName =/^[a-zA-Z0-9]{1,25}$/;
    const regexRating =/^\d+(\.\d+)?$/;
    const regexDescription =/^[a-zA-Z0-9,. ]*$/;
    const regexPlatform = /^[a-zA-Z\s]*$/;
    const regexGenre=/^[a-zA-Z]*$/;
    const regexReleased=/^\d{4}-\d{2}-\d{2}$/;
    // const regexImg= /\.(jpg|png|gif|JPG|PNG|GIF)$/;


    // function imageVerification(inputs){
    //     return regexImg.test(inputs.background_image)
    // }


    const errors = {};


    if(inputs.name){
       if (!inputs.name || typeof inputs.name !== 'string' || inputs.name.length === 0) {
        errors.name = 'Name is required';
        } else {
        if (inputs.name.length > 25) {
            errors.name = 'Name cannot be more than 25 characters';
        } else if (!regexName.test(inputs.name)) {
            errors.name = 'Name is invalid';
        } else {
            errors.name = '';
        }
        }
    }

    if(inputs.rating){
        if (!inputs.rating || typeof inputs.rating !== 'number') {
        errors.rating = 'Rating is required and must be a number';
        } else if (!regexRating.test(String(inputs.rating))) {
        errors.rating = 'Rating is invalid';
        } else {
        errors.rating = '';
        }
    }

    if(inputs.description){
        if (!inputs.description || typeof inputs.description !== 'string' || inputs.description.length === 0) {
            errors.description = 'Description is required';
        } else {
            if (!regexDescription.test(inputs.description)) {
                errors.description = 'Description is invalid; only letters, numbers, commas, and spaces are allowed';
            } else {
                errors.description = '';
            }
        }
    }
    if(inputs.platform){
    if (!inputs.platform || typeof inputs.platform !== 'string' || inputs.platform.length === 0) {
        errors.platform = 'Platform is required';
    } else {
        if (!regexPlatform.test(inputs.platform)) {
            errors.platform = 'Platform is invalid; only letters and spaces are allowed';
        } else {
            errors.platform = '';
        }
    }
    }

    if(inputs.genre){
        if (!inputs.genre || typeof inputs.genre !== 'string' || inputs.genre.length === 0) {
            errors.genre = 'Genre is required';
        } else {
            if (!regexGenre.test(inputs.genre)) {
                errors.genre = 'Genre is invalid; only letters are allowed';
            } else {
                errors.genre = '';
            }
        }
    }

    if(inputs.released){
        if (!inputs.released || typeof inputs.released !== 'string' || inputs.released.length === 0) {
            errors.released = 'Released date is required';
        } else {
            if (!regexReleased.test(inputs.released)) {
                errors.released = 'Released date is invalid; it must be in the "yyyy-mm-dd" format';
            } else {
                errors.released = '';
            }
        }
    }

//     if(inputs.background_image){
//     (!inputs.background_image) ? errors.background_image= "Image is required" : errors.background_image="";
//     (!imageVerification(inputs))? errors.background_image= "Image is invalid" : errors.background_image="";
// }
    return errors;
}



