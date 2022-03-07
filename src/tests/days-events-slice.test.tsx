import reducer, {
  IDaysEventsState,
  addDayEvent,
  removeDayEvent,
} from "../redux/days-events-slice";

test("should return the initial state", () =>
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual({ daysEventsIds: {} }));

test("should handle a addDayEvent method", () => {
  const previousState: IDaysEventsState = { daysEventsIds: {} };
  const dayId = "testDayId";
  const eventId = "testDayId";
  expect(reducer(previousState, addDayEvent({ dayId, eventId }))).toEqual({
    daysEventsIds: { [dayId]: [eventId] },
  });
});

test("should handle a removeDayEvent method", () => {
  const dayId = "testDayId";
  const eventId1 = "testDayId1";
  const eventId2 = "testDayId2";
  const previousState: IDaysEventsState = {
    daysEventsIds: { [dayId]: [eventId1, eventId2] },
  };
  expect(
    reducer(previousState, removeDayEvent({ dayId, eventId: eventId1 }))
  ).toEqual({ daysEventsIds: { [dayId]: [eventId2] } });
});
