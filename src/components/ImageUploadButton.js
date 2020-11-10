import React, { useRef } from 'react';
import { Button } from '@material-ui/core';

const ImageUploadButton = props => {

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.setImage(fileUploaded);
    }

    return (
        <React.Fragment>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Upload a file
            </Button>
            &nbsp;
            { props.imageName }
            <input
                type="file"
                accept="image/png, image/jpeg"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
            />
        </React.Fragment>
    );
}
export default ImageUploadButton;
