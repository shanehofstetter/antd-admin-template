import {Form} from "antd";

export const mapModelAttributesToFormFields = (model) => {
    model = Object.assign({}, model);
    if (!model) return null;
    Object.keys(model).map(key => {
        return model[key] = Form.createFormField({value: model[key]});
    });
    return model;
};
