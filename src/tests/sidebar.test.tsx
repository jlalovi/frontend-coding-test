import React from "react";
import { fireEvent } from "@testing-library/react";
import Sidebar from "../components/sidebar/sidebar";
import { render, screen } from "./test-utils";
describe("Sidebar component", () => {
  test("Add new event and rename", async () => {
    render(<Sidebar />);
    const input = screen.getByPlaceholderText(/Enter a new event/i);
    const createBtn = screen.getByText(/Create/i);
    const testValue = "Hola caracola";
    fireEvent.change(input, { target: { value: testValue } });
    fireEvent.click(createBtn);
    const eventInput: HTMLInputElement = screen.getByRole("event-textfield");
    expect(eventInput.value).toBe(testValue);
    // Rename created event
    const newValue = "Renamed value";
    fireEvent.change(eventInput, { target: { value: newValue } });
    const renameBtn = screen.getByText("Rename event");
    fireEvent.click(renameBtn);
    expect(eventInput.value).toBe(newValue);
  });
  test("Add 3 events", async () => {
    render(<Sidebar />);
    const input = screen.getByPlaceholderText(/Enter a new event/i);
    const createBtn = screen.getByText(/Create/i);
    fireEvent.change(input, { target: { value: "Event 1" } });
    fireEvent.click(createBtn);
    fireEvent.change(input, { target: { value: "Event 2" } });
    fireEvent.click(createBtn);
    fireEvent.change(input, { target: { value: "Event 3" } });
    fireEvent.click(createBtn);
    const eventInputs = screen.getAllByRole("event-textfield");
    expect(eventInputs.length).toBe(3);
  });
});
