import {Button, Modal, Upload} from "antd";
import React, {useState} from "react";

const ImageInput = React.forwardRef(({text, onChange, ...rest}, ref) => {

    const beforeUpload = () => false;

    const [file, setFile] = useState(null);
    const [previewing, setPreviewing] = useState(false);

    const handleChange = (e) => {
        let newFile = null;
        if (e.file && e.file.status !== 'removed') newFile = e.file;
        if (onChange) onChange(newFile);

        if (newFile && newFile.type.match(/^image/)) {
            // generate url for preview
            newFile.url = URL.createObjectURL(newFile);
        }

        setFile(newFile);
    };

    const handleCancel = () => {
        setPreviewing(false);
    };

    const handlePreview = () => {
        setPreviewing(true);
    };

    return (
        <React.Fragment>
            <Upload fileList={file ? [file] : []}
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                    onPreview={handlePreview}
                    multiple={false}  {...rest}
                    ref={ref}
                    listType={'picture-card'}
                    accept={'image/*'}>
                {file ? null : <Button icon="upload">{text}</Button>}
            </Upload>
            <Modal visible={previewing} footer={null} onCancel={handleCancel}>
                <img alt={file ? file.name : ''} style={{width: '100%'}} src={file ? file.url : null}/>
            </Modal>
        </React.Fragment>
    )
});

export default ImageInput;
