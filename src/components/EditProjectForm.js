import React, { useContext } from "react";
import { GlobalProvider } from "../GlobalContext";

const EditProjectForm = () => {
  const {
    handleInputProjectEdit,
    handleEditIncrementProgress,
    handleEditDecrementProgress,
    editedProject,
    editProject,
  } = useContext(GlobalProvider);
  return (
    <div id="projectEdit">
      <form
        className="flex flex-col text-xs sm:text-sm text-slate-500 bg-white dark:bg-slate-800 p-4 sm:px-8 rounded-3xl shadow-lg dark:text-slate-100 "
        onSubmit={editProject}
      >
        <div className="text-slate-900 dark:text-slate-100 text-lg font-bold">
          Edit Project
        </div>
        <div className="flex flex-col sm:gap-4 sm:flex-row">
          <div className="flex flex-col w-full">
            <div className="mt-2 text-md"> Nama Project </div>
            <input
              type="text"
              onChange={handleInputProjectEdit}
              value={editedProject.project.name}
              required
              name="name"
              placeholder="name"
              className=" p-3 px-4 border-2 h-12 rounded-xl bg-transparent dark:border-slate-600 border-slate-300 "
            />
            <div className="mt-3 text-md"> Progress</div>
            <div className="p-3 px-4 rounded-xl bg-orange-100 dark:bg-indigo-900 h-12 flex items-center justify-between">
              <div>
                {editedProject.project.progress < 12
                  ? editedProject.project.progress * 8
                  : "100"}
                %
              </div>
              <div className="flex flex-row gap-4">
                <div
                  className="flex items-center rounded-full bg-white dark:bg-slate-700 border border-slate-400 p-2 justify-center h-8 w-8 hover:scale-110 shadow-md duration-300"
                  onClick={handleEditDecrementProgress}
                >
                  -
                </div>
                <div
                  className="flex items-center rounded-full bg-white dark:bg-slate-700 border border-slate-400 p-2 justify-center h-8 w-8 hover:scale-110 shadow-md duration-300"
                  onClick={handleEditIncrementProgress}
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mt-2 text-md"> Deskripsi</div>
            <textarea
              style={{ resize: "none" }}
              type="text"
              onChange={handleInputProjectEdit}
              value={editedProject.project.desc}
              required
              name="desc"
              placeholder="desc"
              className=" p-3 px-4 border-2 noScrollbar h-32 rounded-xl bg-transparent dark:border-slate-600 border-slate-300 "
            />
          </div>
        </div>
        <div className="flex-row flex gap-4 pr-2">
          <div className="mt-2 text-md w-1/2 ">
            Mulai Project
            <input
              type="date"
              onChange={handleInputProjectEdit}
              value={editedProject.project.startDate}
              required
              name="startDate"
              className=" p-3 px-4 border-2 h-12 rounded-xl bg-transparent dark:border-slate-600 border-slate-300 w-full "
            />
          </div>
          <div className="mt-2 text-md w-1/2 ">
            Deadline Project
            <input
              type="date"
              onChange={handleInputProjectEdit}
              value={editedProject.project.deadline}
              required
              name="deadline"
              className=" p-3 px-4 border-2 h-12 rounded-xl bg-transparent dark:border-slate-600 border-slate-300 w-full "
            />
          </div>
        </div>
        <div className="mt-2 flex flex-row-reverse">
          <button
            type="submit"
            className="bg-orange-400 text-white p-3 px-4 hover:scale-110 shadow-md duration-300 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;
