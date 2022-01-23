import { FormSchema } from '/@/components/Form';

export const formSchema: FormSchema[] = [
  {
    field: 'passwordOld',
    label: 'Current password',
    component: 'InputPassword',
    required: true,
  },
  {
    field: 'passwordNew',
    label: 'New password',
    component: 'StrengthMeter',
    componentProps: {
      placeholder: 'new password',
    },
    rules: [
      {
        required: true,
        message: 'Please enter a new password',
      },
    ],
  },
  {
    field: 'confirmPassword',
    label: 'Confirm password',
    component: 'InputPassword',

    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject("can't be empty");
            }
            if (value !== values.passwordNew) {
              return Promise.reject('The passwords entered twice are inconsistent!');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
];
