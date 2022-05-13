import React from 'react';
import Fieldset from 'components/FieldSet/index';
import CardNumberInput from 'components/Input/CardNumberInput';

export default {
  title: 'FieldSet',
  component: Fieldset,
};

const Template = (args) => <Fieldset {...args} />;

export const Example = Template.bind({});

Example.args = {
  id: 'cardNumber',
  description: '카드 번호',
  children: <CardNumberInput cardNumbers={['1111', '1111', '1111', '1111']} />,
  errorMessage: '유효한 카드 번호가 아닙니다.',
  isError: false,
};
