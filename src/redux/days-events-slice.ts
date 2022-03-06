import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDaysEventsState {
  daysEventsIds: { [dayId: string]: string[] };
}

const initialState: IDaysEventsState = {
  daysEventsIds: {},
};

const daysEventsSlice = createSlice({
  initialState,
  name: "events",
  reducers: {
    addDayEvent(
      state,
      action: PayloadAction<{ dayId: string; eventId: string }>
    ) {
      const dayEvents = state.daysEventsIds[action.payload.dayId];
      console.log(dayEvents);
      if (dayEvents) {
        dayEvents.push(action.payload.eventId);
      } else {
        state.daysEventsIds[action.payload.dayId] = [action.payload.eventId];
      }
    },
  },
});

export const { addDayEvent } = daysEventsSlice.actions;

export default daysEventsSlice.reducer;
