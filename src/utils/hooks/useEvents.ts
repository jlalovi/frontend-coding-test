import { useAppSelector, useAppDispatch } from "../redux-hooks-utils";
import { getRandomColor, getRandomUUID } from "../functions";
import {
  addEvent,
  removeEventById,
  updateEvent,
} from "../../redux/events-slice";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.entities);
  return {
    events,
    addEvent: (name: string) =>
      dispatch(
        addEvent({
          id: getRandomUUID(),
          color: getRandomColor(),
          name,
        })
      ),
    removeEventById: (id: string) => dispatch(removeEventById(id)),
    renameEvent: (id: string, name: string) =>
      dispatch(updateEvent({ id, changes: { name } })),
  };
};
