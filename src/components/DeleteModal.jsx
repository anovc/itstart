//test_app/src/components/DeleteModal.jsx
export default function DeleteModal({ isOpen, closeDeleteModal, seminarData, deleteSeminar  }) {
    
    return (
        <dialog id='delete-modal' className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="text-lg font-bold">Вы точно хотите удалить семинар?</h3>
                
                <div className="modal-action">
                    <form action="" method="dialog" className="flex gap-2">
                        <button className="btn btn-outline" onClick={closeDeleteModal}>Отмена</button>
                        <button className="btn btn-error" onClick={() => deleteSeminar(seminarData.id)}>Удалить</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}