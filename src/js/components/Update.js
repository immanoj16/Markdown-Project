import React from 'react';
import marked from 'marked';


class Update extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            currentText: ''
        }
        this.updateText = this.updateText.bind(this);
    }

    updateText (e) {

        this.setState({
            currentText: marked(e.target.value)
        })

    }

    componentDidUpdate (prevProp, prevState) {
        this.refs.test.innerHTML = this.state.currentText;
    }

    render () {

        const {currentText} = this.state;
        console.log(currentText);

        return (
            <div>
                <div className="col-md-6">
                    <div className="content">
                        <textarea rows="22" type="text" className="form-control" onChange={this.updateText} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div ref='test' />
                </div>
            </div>
        )
    }
}

export default Update;
