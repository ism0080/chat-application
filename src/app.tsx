import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'

const App = () => <h1>Hello World</h1>

render(React.createElement(hot(App)), document.getElementById('app'))
