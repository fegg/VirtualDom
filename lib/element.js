var utils = require('lib/utils.js');

var Element = {
    index: 0,
    create: function(tagName, props, children) {
        var _current = {};
        _current.tagName = tagName;
        _current.props = props;
        _current.children = children;
        _current.key = props.key ? props.key : Element.index;
        Element.index++;
        return _current; // dom obj
    },
    render: function(domObj) {
        var el = document.createElement(domObj.tagName);
        var props = domObj.props;
        for (var item in props) {
            var val = props[item];
            el.setAttribute(item, val);
        }
        // key for diff
        el.setAttribute('key', domObj.key);
        var children = domObj.children;
        children.forEach(function(child) {
            var childEl = child.tagName !== undefined ? Element.render(child) : document.createTextNode(child);
            el.appendChild(childEl);
        })
        return el; // dom tree
    }
}

module.exports = Element;
