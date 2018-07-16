import React from 'react';
import { Form, Icon, Input, Tooltip } from 'antd';
const FormItem = Form.Item;

export const CardBlogForm = () => (

    <div className="formu">
        <Form >

            <FormItem

                label={(
                    <span>
                  Nickname&nbsp;
                        <Tooltip title="Cual es nombre del ?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
                )}
            >
                <Input />
            </FormItem>
            </Form>
    </div>
);