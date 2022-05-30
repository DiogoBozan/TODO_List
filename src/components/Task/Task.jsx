function Task() {
  return (
    <>
      <input type="text" placeholder="what do you need to do?" />
      <button onClick={handleSubmit}>Add List</button>
    </>
  );
}

export default Task;
