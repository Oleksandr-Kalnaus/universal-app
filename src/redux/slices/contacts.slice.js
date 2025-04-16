import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Іван Петренко",
      email: "ivan@example.com",
      phone: "+380991234567",
    },
    {
      id: 2,
      name: "Марія Сидоренко",
      email: "maria@example.com",
      phone: "+380992345678",
    },
  ],
  status: "idle",
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateContact: (state, action) => {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
