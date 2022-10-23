import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: [
    { name: 'Welcome', key: 'main' },
    { name: 'About us', key: 'about' },
    { name: 'Contacts', key: 'contacts' },
  ],
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
});

export const selectSections = (state) => state.section.sections;

export default sectionSlice.reducer;
