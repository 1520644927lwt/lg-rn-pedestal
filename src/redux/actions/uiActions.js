import { actionType } from "../actionType";

/**
 * 通常，根据action类型来命名函数
 */

/*
* type：表示是action的具体类型，我们可以直接使用我们上个actionType
* payload: 表示参数，也是外面传过来的参数
* 在这里，addAge函数，就是dispatch发送的包裹了
*/
export function addAge(age) {
    return {
        type: actionType.ActionUI.KaddAge,
        payload: age
    }
}

export function decrementAge(age) {
    return {
        type: actionType.ActionUI.KdecrementAge,
        payload: age
    }
}

export function modifyName(name) {
    return {
        type: actionType.ActionUI.KmodifyName,
        payload: name
    }
}
