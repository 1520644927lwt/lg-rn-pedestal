import { actionType } from "../actionType";
import { fromJS } from "immutable";

/**
 * 初始状态，不可变的，这里的state的的key，都是在UI界面中的state可以直接调用的
 * 比如：界面一个文本的名字内容，显示什么，就是直接用这里的myName
 */

function initialState() {
    return fromJS({
        myName: "张三",
        myAge: 18
    });
}

/**
 * 这里为了代码的简洁性、可读性、维护性、解耦性
 * 我们不要写成switch语句，否则一个函数的行数很容易超过50行
 * 个人不建议一个函数的行数超过50行
 *
 *  我们这里根据prototype来定义多个函数，只是参数的类型不同
 *  有点像C++里的函数重载
 */
export default function reducer(state = initialState(), action) {
    if (typeof reducer.prototype[action.type] === 'function') {
        return reducer.prototype[action.type](state, action);
    } else {
        return state;
    }
}

reducer.prototype[actionType.ActionUI.KaddAge] = (state, action) => {
    return state.set('myAge', action.payload);
};

reducer.prototype[actionType.ActionUI.KdecrementAge] = (state, action) => {
    return state.set('myAge', action.payload);
};

reducer.prototype[actionType.ActionUI.KmodifyName] = (state, action) => {
    return state.set('myName', action.payload);
};
