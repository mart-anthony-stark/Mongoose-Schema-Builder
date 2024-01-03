import { useModelsContext } from "../hooks/useModelsContext";

function ErrorModal() {
  const { error } = useModelsContext();
  return (
    <dialog id="error_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{error?.title}</h3>
        <p className="py-4">{error?.message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Okay</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ErrorModal;
