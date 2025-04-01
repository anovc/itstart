
"use client";

import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import SeminarCard from "./SeminarCard";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import SeminarSkeleton from "./SeminarSkeleton";
import toast from "react-hot-toast";

export default function SeminarsItems() {
  const [seminars, setSeminars] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [seminarData, setSeminarData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSeminars();
  }, []);

  // Получения данных семинаров с сервера
  async function fetchSeminars() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/seminars/");

      if (!response.ok) {
        throw new Error("Сервер с данными не доступен: ", response.status);
      }
      const data = await response.json();
      setSeminars(data);
    } catch (error) {
      toast.error(`Не удалось загрузить данные: ${error}`);
      setSeminars([]);
    } finally {
      setIsLoading(false);
    }
  }

  // Открытие модального окна удаления семинара
  function openDeleteModal(id) {
    setSeminarData(seminars.find((seminar) => seminar.id == id));
    setShowDeleteModal(true);
  }

  // Удаление семинара
  function deleteSeminar(id) {
    fetch(`http://localhost:3000/seminars/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        toast.success("Семинар удален");
        fetchSeminars();
      } else {
        toast.error("Ошибка при удалении семинара");
      }
    });

    setShowDeleteModal(false);
  }

  // Открытие модального окна редактирования семинара
  function openEditModal(id) {
    setShowEditModal(true);
    setIsCreateMode(false);
    setSeminarData(seminars.find((seminar) => seminar.id == id));
  }

  // Редактирование или создание семинара
  function editSeminar(formData) {
    if (isCreateMode) {
      fetch("http://localhost:3000/seminars/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response}`);
          }
          fetchSeminars();
          toast.success("Семинар успешно создан.");
          return response.json();
        })
        .catch((error) => {
          toast.error("Ошибка при создании семинара: ", error);
        });
    } else {
      fetch(`http://localhost:3000/seminars/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response}`);
          }

          fetchSeminars();
          toast.success("Семинар успешно обновлен.");
          return response.json();
        })
        .catch((error) => {
          toast.error("Ошибка при обновлении семинара: ", error);
        });
    }

    closeEditModal();
  }

  // Обработка клика на кнопку создания семинара
  function handleCreateSeminarClick() {
    setSeminarData({
      id: crypto.randomUUID().split("-")[0],
      title: "",
      description: "",
      date: "",
      time: "",
      photo: "",
    });
    setIsCreateMode(true);
    setShowEditModal(true);
  }
  
  // Закрытие модального окна редактирования
  function closeEditModal() {
    setShowEditModal(false);
    setIsCreateMode(null);
  }

  return (
    <>
      <div className="flex justify-between w-full">
        <p className="text-2xl font-bold mb-5 text-center">Семинары</p>
        <button className="btn btn-primary" onClick={handleCreateSeminarClick}>
          <PlusIcon className="size-6" />
          Создать семинар
        </button>
      </div>
      <div className="flex justify-center">
        <DeleteModal
          isOpen={showDeleteModal}
          closeDeleteModal={() => setShowDeleteModal(false)}
          seminarData={seminarData}
          deleteSeminar={deleteSeminar}
        />
        <EditModal
          isOpen={showEditModal}
          closeEditModal={closeEditModal}
          seminarData={seminarData}
          editSeminar={editSeminar}
          isCreateMode={isCreateMode}
        />

        {isLoading ? (
          <div className="flex flex-wrap gap-4 justify-start w-full">
            {[...Array(4)].map((_, i) => (
              <SeminarSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-start">
            {seminars.map((seminar) => (
              <SeminarCard
                key={seminar.id}
                seminar={seminar}
                openDeleteModal={openDeleteModal}
                openEditModal={openEditModal}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
