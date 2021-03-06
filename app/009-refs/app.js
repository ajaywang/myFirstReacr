import React, { Component } from 'react';
import { render } from 'react-dom';

/*
点击按钮后获取焦点
 */

class FocusText extends Component{

    handleClick(){
        this.refs.myTextInput.focus();
    }

    render(){
        return(
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}

render(
    <FocusText />,
    document.getElementById('app')
);