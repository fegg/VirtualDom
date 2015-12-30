
var utils = require('lib/utils.js');

module.exports = DIFF_TYPE = {
    MOVE: 1,
    REPLACE: 2,
    PROPS: 3,
    TEXT: 4
}




var diff = function(oldTree, newTree) {
    var index = 0;
    var patches = {};
    runDiff(oldTree, newTree, index, patches);
    return patches;
}


var runDiff = function(oldDom, newDom, index, patches) {
    // 本次 diff 的差异纪录
    var _current = [];

    if (newDom === null) { // 新节点不存在，全部替换

    } else if (utils.isString(oldDom) && utils.isString(newDom)) { // 如果只是普通的文本
        if (oldDom !== newDom) {
            _current.push({
                type: DIFF_TYPE.TEXT,
                content: newDom
            })
        }
    } else if ((oldDom.tagName === newDom.tagName) && (oldDom.key === newDom.key)) { // 如果节点一致，对比 props
        var propsPatches = diffProps(oldDom, newDom);
        _current.push({
            type: DIFF_TYPE.PROPS,
            props: propsPatches
        })

    } else { // 节点不一致，
        _current.push({
            type: DIFF_TYPE.REPLACE,
            node: newDom
        })
    }

    index++;

    patches[index] = _current;

}


var diffProps = function(oldDom, newDom) {
    var oldProps = oldDom.props;
    var newProps = newDom.props;

    var patches = {};

    // 对比不同的props
    for(key in oldProps){
    	var value = oldProps[key];
    	if(newProps[key] !== value){
    		patches[key] = value;
    	}
    }

    // newDom 的其他 props
    for(key in newProps){
    	var value = newProps[key];
    	if(patches[key] !== value){
	    	patches[key] = value;
    	}
    }

    return patches;
}


module.exports = diff;
