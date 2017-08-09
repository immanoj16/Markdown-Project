import React from 'react';
import Update from './components/Update';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <header>
                        <h1>Markdown Project</h1>
                    </header>
                </div>
                <div className="row">
                    <Update />
                </div>
            </div>
        );
    }
}
export default App;
