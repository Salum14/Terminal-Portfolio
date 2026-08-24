function TerminalTitleBar() {
    return (
        <div className="terminal-titlebar">
            <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
            </div>

            <div className="terminal-title">
                Salum — Terminal
            </div>
        </div>
    );
}

export default TerminalTitleBar;