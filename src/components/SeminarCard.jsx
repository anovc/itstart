//test_app\src\components\SeminarCard.jsx
import Image from "next/image";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function SeminarCard({
  seminar,
  openDeleteModal,
  openEditModal,
}) {
  return (
    <div className="card w-full sm:w-69 shadow-md bg-white hover:shadow-lg">
      <Image
        src={seminar.photo}
        width={500}
        height={500}
        alt={`${seminar.title} фото`}
        className="rounded-t"
      />
      <div className="card-body">
        <h2 className="card-title break-words overflow-auto">
          {seminar.title}
        </h2>
        <p className="line-clamp-3 break-words overflow-auto">
          {seminar.description}
        </p>
        <div className="flex gap-2 break-words overflow-auto">
          <span className="border border-gray-300 rounded bg-gray-100 p-1 break-words overflow-auto">
            {seminar.date}
          </span>{" "}
          <span className="border border-gray-300 rounded bg-gray-100 p-1">
            {seminar.time}
          </span>
        </div>
      </div>
      <div className="card-actions justify-start ml-5 mb-5">
        <button className="btn" onClick={() => openEditModal(seminar.id)}>
          <PencilSquareIcon className="size-6" />
        </button>
        <button
          className="btn btn-error btn-outline"
          onClick={() => openDeleteModal(seminar.id)}
        >
          <TrashIcon className="size-6"/>
        </button>
      </div>
    </div>
  );
}
