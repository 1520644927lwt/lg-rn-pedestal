import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
        global.ErrorUtils.setGlobalHandler(e=> {
            /*你的异常处理逻辑*/
            console.log('%c 处理异常 .....', 'font-size:12px;color:#869')
            console.log(e.message)
            this.setState({
                hasError: true
            });
        });
        require('promise/setimmediate/rejection-tracking').enable({
            allRejections: true,
            onUnhandled: (id, error = {}) => {
                let message
                let stack

                const stringValue = Object.prototype.toString.call(error);
                if (stringValue === '[object Error]') {
                    message = Error.prototype.toString.call(error);
                    stack = error.stack;
                } else {
                    /* $FlowFixMe(>=0.54.0 site=react_native_oss) This comment suppresses
                     * an error found when Flow v0.54 was deployed. To see the error delete
                     * this comment and run Flow. */
                    message = require('pretty-format')(error);
                }

                const warning =
                    `Possible Unhandled Promise Rejection (id: ${id}):\n` +
                    `${message}\n` +
                    (stack == null ? '' : stack);
                console.warn(warning);
                // 更新 state 使下一次渲染能够显示降级后的 UI
                this.setState({
                    hasError: true
                })
            },
            onHandled: id => {
                const warning =
                    `Promise Rejection Handled (id: ${id})\n` +
                    'This means you can ignore any previous messages of the form ' +
                    `"Possible Unhandled Promise Rejection (id: ${id}):"`;
                console.warn(warning);
            },
        });
    }

    static propTypes={
        //自定义降级后的 UI
        errorPage:PropTypes.element,
        //可以根据自己的实际业务需求再增加其他属性，比如配置开发模式下是否要关闭红屏/黄屏显示
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return this.props.errorPage? this.props.errorPage:<h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}
export default ErrorBoundary
