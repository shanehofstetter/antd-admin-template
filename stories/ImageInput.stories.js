import {storiesOf} from "@storybook/react";
import React from "react";
import ImageInput from "../src/components/common/ImageInput";
import "antd/dist/antd.css";
import { text } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

const eventsFromNames = actions('onChange');

storiesOf('ImageInput', module)
    .add('default', () => <ImageInput text={text('Text', 'Choose file')} {...eventsFromNames}/>);