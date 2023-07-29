import { useReducer } from 'react';

type InitialState<T> = {
  form: T;
  previousForm: T;
  isFormDirty: boolean;
  showSuccess: boolean;
  showError: boolean;
};

type Action<T> =
  | {
      type: Actions.SET_FORM;
      payload: Partial<T>;
    }
  | {
      type: Actions.SET_PREVIOUS_FORM;
      payload: Partial<T>;
    }
  | {
      type: Actions.SET_IS_FORM_DIRTY;
      payload: Pick<InitialState<T>, 'isFormDirty'>;
    }
  | {
      type: Actions.SET_SHOW_SUCCESS;
      payload: Pick<InitialState<T>, 'showSuccess'>;
    }
  | {
      type: Actions.SET_SHOW_ERROR;
      payload: Pick<InitialState<T>, 'showError'>;
    }
  | {
      type: Actions.ON_SUCCESS;
    }
  | {
      type: Actions.ON_ERROR;
    }
  | {
      type: Actions.RESET;
    }
  | {
      type: Actions.SET_STATE;
      payload: Partial<InitialState<T>>;
    };

enum Actions {
  SET_FORM = 'SET_FORM',
  SET_PREVIOUS_FORM = 'SET_PREVIOUS_FORM',
  SET_IS_FORM_DIRTY = 'SET_IS_FORM_DIRTY',
  SET_SHOW_SUCCESS = 'SET_SHOW_SUCCESS',
  SET_SHOW_ERROR = 'SET_SHOW_ERROR',
  ON_SUCCESS = 'ON_SUCCESS',
  ON_ERROR = 'ON_ERROR',
  RESET = 'RESET',
  SET_STATE = 'SET_STATE',
}

export function useFormHandling<T>(formState: T) {
  const getInitialState = (formState: T) => ({
    form: formState,
    previousForm: formState,
    isFormDirty: false,
    showSuccess: false,
    showError: false,
  });

  const formHandlingReducer = (state: InitialState<T>, action: Action<T>) => {
    switch (action.type) {
      case Actions.SET_FORM:
        return {
          ...state,
          form: { ...state.form, ...action.payload },
        };
      case Actions.SET_PREVIOUS_FORM:
        return {
          ...state,
          previousForm: {
            ...state.previousForm,
            ...action.payload,
          },
        };
      case Actions.SET_IS_FORM_DIRTY:
        return {
          ...state,
          isFormDirty: action.payload.isFormDirty,
        };
      case Actions.SET_SHOW_SUCCESS:
        return {
          ...state,
          showSuccess: action.payload.showSuccess,
        };
      case Actions.SET_SHOW_ERROR:
        return {
          ...state,
          showError: action.payload.showError,
        };
      case Actions.ON_SUCCESS:
        return {
          ...state,
          previousForm: state.form,
          isFormDirty: false,
          showSuccess: true,
          showError: false,
        };
      case Actions.ON_ERROR:
        return {
          ...state,
          previousForm: state.previousForm,
          isFormDirty: false,
          showSuccess: false,
          showError: true,
        };
      case Actions.RESET:
        return {
          ...state,
          previousForm: state.previousForm,
          isFormDirty: false,
          showSuccess: false,
          showError: false,
        };
      case Actions.SET_STATE:
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formHandlingReducer, formState, getInitialState);

  return { state, dispatch, Actions };
}
