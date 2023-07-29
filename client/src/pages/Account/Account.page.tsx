import React from 'react';
import './Account.page.scss';

export function AccountPage() {
  // const initialAccountFormState = getInitialAccountFormState(user)
  // const { state, dispatch, Actions } = useFormHandling(initialAccountFormState);

  // const dispatchFieldChange = (field: string, value: string) => {
  //   dispatch({
  //     type: Actions.SET_FORM,
  //     payload: {
  //       [field.name]: {
  //         ...field,
  //         value: field.formatting?.(value) || value,
  //         isDirty: true,
  //         isValid: !!value && !!field.required,
  //       },
  //     },
  //   });
  // };

  // const handleFieldChange = (field, value) => {
  //   if (field.onlyNumbers) {
  //     if (isNumericValue(value) || value === '') {
  //       dispatchFieldChange(field, value);
  //     }
  //   } else {
  //     dispatchFieldChange(field, value);
  //   }
  // };

  // const createInputProps = (formState: any, name: string) => {
  //   const state = formState[name];
  //   const showErrorMessage = !state.isValid && state.isDirty;

  //   return {
  //     key: name,
  //     type: state.type || 'text',
  //     value: state.value,
  //     required: state.required,
  //     disabled: false, //if will be loading
  //     errorMessage: showErrorMessage && state.errorMessage,
  //     maxLength: state.maxLength,
  //     onChange: (e: SyntheticEvent) =>
  //       handleFieldChange(state, (e.target as HTMLInputElement).value),
  //   };
  // };
  return <div>Account.page</div>;
}
