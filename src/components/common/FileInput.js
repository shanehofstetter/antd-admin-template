import {Button, Upload} from "antd";
import React, {useState} from "react";

const FileInput = React.forwardRef(({text, onChange, ...rest}, ref) => {

    const beforeUpload = () => false;

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        let newFile = null;
        if (e.file && e.file.status !== 'removed') newFile = e.file;
        if (onChange) onChange(newFile);
        setFile(newFile);
    };

    return <Upload fileList={file ? [file] : []} onChange={handleChange} beforeUpload={beforeUpload}
                   multiple={false}  {...rest} ref={ref}>
        <div className='button_view'>
            <div className='button_view'>
                <Button icon="upload">
                    {text}
                </Button>
            </div>
        </div>
    </Upload>
});

export default FileInput;
