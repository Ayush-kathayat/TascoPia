//! this is a utility function this will return us an object

const CreateObject = (taskName) => {
  return {
    id: Date.now().toString(),
    name: taskName,
    index : 0,

    subtask: {
      remainingtask : 0,
      taskTotal: 0,

      subtasks: [
        // { sbt: "complete poly1", isCompleted: false},
        // { sbt: "complete poly2", isCompleted: false},
      ],
    },
  };
};

export default CreateObject;
