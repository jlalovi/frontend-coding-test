import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDaysEventsState {
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
      if (dayEvents) {
        dayEvents.push(action.payload.eventId);
      } else {
        state.daysEventsIds[action.payload.dayId] = [action.payload.eventId];
      }
    },
    removeDayEvent(
      state,
      action: PayloadAction<{ dayId: string; eventId: string }>
    ) {
      const dayId = action.payload.dayId;
      const dayEvents = state.daysEventsIds[dayId];
      if (dayEvents) {
        const filteredDayEvents = dayEvents.filter(
          (eventId) => eventId !== action.payload.eventId
        );
        state.daysEventsIds[dayId] = filteredDayEvents;
      }
    },
  },
});

export const { addDayEvent, removeDayEvent } = daysEventsSlice.actions;

export default daysEventsSlice.reducer;
