
    var domTree = {
        tagName: 'ul',
        props: {
            id: 'list'
        },
        children: [{
            tagName: 'li',
            props: {
                class: 'item'
            },
            children: ['item1']
        }, {
            tagName: 'li',
            props: {
                class: 'item'
            },
            children: ['item2']
        }, {
            tagName: 'li',
            props: {
                class: 'item'
            },
            children: ['item3']
        }, {
            tagName: 'li',
            props: {
                class: 'item'
            },
            children: ['item4']
        }]
    }


    <ul id='list'>
    	<li class='item'>item1</li>
    	<li class='item'>item2</li>
    	<li class='item'>item3</li>
    	<li class='item'>item4</li>
    </ul>
