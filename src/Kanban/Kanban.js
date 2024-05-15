import "./Kanban.css";

function Kanban() {
  return (
    <div className="kanban-container">
      <div className="kanban-board">
        <div className="kanban-col1header" id="kcol1head">
          <h2>column 1 header</h2>
        </div>
        <div className="kanban-col2header" id="kcol2head">
          <h2>column 2 header</h2>
        </div>

        <div className="kanban-col1" id="kcol1">
          <div className="kanban-card">
            <h2>card in col 1</h2>
          </div>
        </div>
        <div className="kanban-col2" id="kcol2">
          <div className="kanban-card">
            <h2>card in col 2</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
