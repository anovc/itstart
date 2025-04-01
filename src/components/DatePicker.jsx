// test_app/src/components/DatePicker.jsx

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function DatePicker({ selected, onDateChange }) {
  const selectedDate = selected ? new Date(selected) : undefined;

  // Обработка выбора даты
  function handleDateSelect(date) {
    if (!date) return;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${day}.${month}.${year}`;
    onDateChange(formattedDate);
  }

  return (
    <DayPicker
      animate
      mode="single"
      selected={selectedDate}
      onSelect={handleDateSelect}
      footer={
        selectedDate
          ? `Выбранная дата: ${selectedDate.toLocaleDateString()}`
          : "Выберите день"
      }
      className="p-5"
    />
  );
}
