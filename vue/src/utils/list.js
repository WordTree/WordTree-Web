class List {
    constructor(words) {
        this.head = {
            data: {},
            strangeDegree: 3,
            prior: this.head,
            next: this.head
        };
        this.tail = this.head;
        this.current = this.head;
        this.length = 1;
        for (const word of words) {
            this.append(word);
        }
        this.next();
    }
    //添加节点
    append(data) {
        const node = {
            data,
            prior: null,
            next: null,
            strangeDegree: 3
        };
        node.prior = this.tail;
        this.tail.next = node;
        node.next = this.head;
        this.tail = node;
        this.length += 1;
    }
    //删除节点
    delete() {
        this.current.prior.next = this.current.next;
        this.current.next.prior = this.current.prior;
        this.current = this.current.next;
        this.length -= 1;
    }
    //由于头节点设空，改变遍历的方法
    next() {
        if(this.length === 1)
            throw "错误：访问的链表为空链表";
        else if(this.current.next === this.head)
            this.current = this.current.next.next;
        else
            this.current = this.current.next;
    }
    //封装获取数据的方法
    data(){
        if(this.current.data==={}||this.current.data===null)
            throw "错误：访问的节点为空节点"
        else
            return this.current.data;
    }
}

export default List
