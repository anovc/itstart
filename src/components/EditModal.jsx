//test_app/src/components/EditModal.jsx

"use client";

import { useState, useEffect } from "react";
import DatePicker from "./DatePicker";

export default function EditModal({
  isOpen,
  closeEditModal,
  editSeminar,
  seminarData,
  isCreateMode
}) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    time: "",
    photo: "",
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  
  useEffect(() => {
    if (seminarData) {
      setFormData({
        id: seminarData.id || "",
        title: seminarData.title || "",
        description: seminarData.description || "",
        date: seminarData.date || "",
        time: seminarData.time || "",
        photo: seminarData.photo || "",
      });
    }
  }, [seminarData]);

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleDateChange(date) {
    setFormData((prev) => ({ ...prev, date }));
    setIsDatePickerOpen(false);
  }
  
  function handleCloseModal() {
    setIsDatePickerOpen(false);
    closeEditModal();
  }

  return (
    <dialog id="edit-modal" className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box overflow-visible">
        <form onSubmit={(e) => {
          e.preventDefault();
          editSeminar(formData);
        }} className="flex flex-col justify-center">
          <h2 className="font-bold text-lg">{ isCreateMode ? "Создать" : "Изменить"} семинар:</h2>
          <fieldset className="fieldset w-full max-w-md">
            <div>
              <label htmlFor="id" className="label">
                ID:
              </label>
              <input
                id="id"
                name="id"
                type="text"
                className="input input-bordered w-full"
                placeholder={formData.id}
                value={formData.id}
                disabled
              />
            </div>

            <div className="mt-4">
              <label htmlFor="title" className="label">
                Название:
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="input w-full"
                placeholder={formData.title}
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="description" className="fieldset-label flex">
                Описание:
              </label>
              <input
                id="description"
                name="description"
                type="text"
                className="input w-full"
                placeholder={formData.description}
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="date" className="fieldset-label flex">
                Дата:
              </label>
              <div className="flex">
              <input
                id="date"
                name="date"
                type="text"
                className="input w-full"
                value={formData.date}
                required
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              />
              <button
                type="button"
                className="btn btn-outline ml-2"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              >
                {isDatePickerOpen ? "Скрыть" : "Изменить"}
              </button>
              </div>

              {isDatePickerOpen && (
                <div className="absolute z-50 mt-1 bg-base-100 shadow-lg rounded-lg border border-base-300">
                  <DatePicker
                    selected={formData.date}
                    onDateChange={handleDateChange}
                  />
                </div>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="time" className="fieldset-label flex">
                Время:{" "}
              </label>
              <input
                id="time"
                name="time"
                type="text"
                className="input w-full"
                placeholder={formData.time}
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mt-4">
              <label htmlFor="time" className="fieldset-label flex">
                Ссылка на фото:{" "}
              </label>
              <input
                id="photo"
                name="photo"
                type="url"
                className="input w-full"
                placeholder={formData.photo}
                value={formData.photo}
                onChange={handleInputChange}
                required
              />
            </div>
            
          </fieldset>
          
          <div className="modal-action flex gap-2">
          
            <button type="button" className="btn btn-outline" onClick={handleCloseModal}>
              Отмена
            </button>
            <button
              type="submit" 
              className="btn btn-primary"
            >
              {isCreateMode ? "Создать" : "Обновить"}
            </button>
          
        </div>
        
        </form>
        
      </div>
    </dialog>
  );
}
