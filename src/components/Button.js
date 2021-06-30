import React from 'react'
import ColorContext from '../contexts/ColorContext'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(value) {
        return (
            <button className={`ui button ${value}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(value) => this.renderButton(value)}
            </ColorContext.Consumer>
        )
    }
}

export default Button