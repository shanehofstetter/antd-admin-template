import {Icon, Modal, Upload} from "antd";
import React, {useState} from "react";
import styles from "./ImageInput.module.scss";

const ImageInput = React.forwardRef(({text, onChange, value, ...rest}, ref) => {

    const initialFile = value && value.url ? {
        uid: value.url,
        ...value,
    } : null;

    const beforeUpload = () => false;

    const [file, setFile] = useState(initialFile);
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

    const uploadButton = (
        <div>
            <Icon type={'plus'} style={{fontSize: "32px", color: "#999"}}/>
            <div className={styles.text}>{text}</div>
        </div>
    );

    return (
        <React.Fragment>
            <Upload fileList={file ? [file] : []}
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                    onPreview={handlePreview}
                    multiple={false}
                    {...rest}
                    ref={ref}
                    listType={'picture-card'}
                    accept={'image/*'}
                    className={styles["image-input"]}>
                {file ? null : uploadButton}
            </Upload>
            <Modal visible={previewing} footer={null} onCancel={handleCancel}>
                <img alt={file ? file.name : ''} style={{width: '100%'}} src={file ? file.url : null}/>
            </Modal>
        </React.Fragment>
    )
});

export default ImageInput;
