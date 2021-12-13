class WordList {
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

    // 改变当前节点指针
    next() {
        if (this.length === 1)
            throw "错误:访问的链表为空链表";
        else if (this.current.next === this.head)
            this.current = this.current.next.next;
        else
            this.current = this.current.next;
    }

    // 获得当前节点的数据
     data() {
        if (this.current.data === {} || this.current.data === null)
            throw "错误:访问的节点为空节点"
        else
            return this.current.data;
    }

    // 返回下一个节点对象
    getNext(startNode) {
        var node = startNode;
        if (this.length === 1)
            throw "错误:访问的链表为空链表";
        else if (node.next === this.head)
            return node.next.next;
        else
            return node.next;
    }

    // 生成[minNum,maxNum] 的随机数
    randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }

    // 生成互不相同的三个随机数，用于随机选取单词
    getThreeNums(){
        let array = new Array();
        var random = 1;
        if(this.length < 6)
            throw "错误:链表的节点数小于4,不足以生成随机数"
        while(array.length < 3){
            random = this.randomNum(1,this.length - 2);
            if(!array.includes(random))
                array.push(random);
        }
        return array;
    }

    // 随机生成三个单词，用于取中文释义
    getFourNodes(){
        let result = new Array();
        let array = this.getThreeNums();
        var node = this.current;
        for(var i = 0;i<3;i++){
            var offset = array[i];
            while(offset>0){
                node = this.getNext(node);
                offset -= 1;
            }
            result.push(node);
        }
        var index = this.randomNum(0,3); // 随机一个位置
            result.splice(index,0,this.current); // 插入当前节点
        return result;
    }
}

export default WordList;
