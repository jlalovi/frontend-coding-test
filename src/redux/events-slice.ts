import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Event } from "../utils/types";

const eventsAdapter = createEntityAdapter<Event>({
  selectId: (event) => event.id, // This line can be omitted, since "selectId" takes "{entity}.id" by default
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const eventsSlice = createSlice({
  initialState: eventsAdapter.getInitialState(),
  name: "events",
  reducers: {
    addEvent: eventsAdapter.addOne,
    removeEventById: eventsAdapter.removeOne,
    updateEvent: eventsAdapter.updateOne,
  },
});

export const { addEvent, removeEventById, updateEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
