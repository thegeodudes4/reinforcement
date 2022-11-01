

const CreateHouseholdModal = () => {
  return (
    <div className="createHouseholdModal">
      <h1>Create Household Modal</h1>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Household Name </label>
          <input type="text" name="household"  required />
          {renderErrorMessage("household")}
        </div>
        <div className="input-container">
          <label>Member Name </label>
          <input type="text" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="button-container">
          <input type="button" value="Sign Up Here" onClick={() => handleClick()}/>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CreateHouseholdModal;
