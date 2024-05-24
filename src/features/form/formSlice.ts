import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface FormState {
  step: number;
  data: {
    fullName: string;
    email: string;
    phoneNumber: string;
    salary: string;
  };
}

const initialState: FormState = {
  step: 1,
  data: {
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateFormData(state, action: PayloadAction<{ [key: string]: string }>) {
      state.data = { ...state.data, ...action.payload };
    },
    resetForm(state) {
      state.step = 1;
      state.data = {
        fullName: '',
        email: '',
        phoneNumber: '',
        salary: '',
      };
    }
  },
});

export const { nextStep, prevStep, updateFormData, resetForm } = formSlice.actions;

export const formReducer = formSlice.reducer;
