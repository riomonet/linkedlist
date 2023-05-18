/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

    /** push(val): add new value to end of list. */
    push(val) {
	let node = new Node(val)
	if (this.tail == null){
	    this.head = node
	    this.tail = node
	}
	else {
	    this.tail.next = node
	    this.tail = node
	}
	this.length++
    }
    
  /** unshift(val): add new value to start of list. */

    unshift(val) {
	let node = new Node(val)
	if (this.tail == null) {
	    this.head = node
	    this.tail = node
	}
	else {
	    node.next = this.head
	    this.head = node
	}
	this.length++
    }
    
  /** pop(): return & remove last item. */

    pop() {

	if(this.length == 1){
	    let val = this.head.val
	    this.head = null
	    this.tail = null
	    this.length--
	    return val
	}
	
	let cur = this.head
	while (cur.next != this.tail)
	    cur = cur.next
	let val = cur.next.val
	this.tail = cur
	this.tail.next = null
	this.length--
	return val
    }

  /** shift(): return & remove first item. */

    shift() {

	if (this.head == null)
	    return null

	else {
	    let tmp = this.head
	    this.head = tmp.next
	    this.length--
	    if(this.length <= 0) {
		this.head = null
		this.tail = null
	    }
		
	    return tmp.val
	}
    }

  /** getAt(idx): get val at idx. */

    getAt(idx) {
	if (idx > this.length)
	    return null
	let cur = this.head
	for(let i = 0; i < idx; i++ )
	    cur = cur.next

	return cur.val
  }

  /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
	if (idx > this.length)
	    return null
	let cur = this.head
	for(let i = 0; i < idx; i++ )
	    cur = cur.next

	cur.val = val
	return true
  }

  /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {

	if (idx == 0)
	    return this.unshift(val)

	if (idx == this.length)
	    return this.push(val)

	let cur = this.head
	for(let i = 0; i < idx-1; i++ )
	    cur = cur.next
	let node = new Node(val)
	node.next = cur.next
	cur.next = node
	this.length++

	return this.length
  }

  /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {

	if (idx == 0)
	    return this.shift()

	if (idx == this.length)
	    return this.pop()

	let cur = this.head
	for(let i = 0; i < idx-1; i++ )
	    cur = cur.next

	let trgt = cur.next
	cur.next = cur.next.next

	this.length--
	return trgt
  }

  /** average(): return an average of all values in the list */

    average() {

	if(this.length == 0)
	    return 0
	let sum = 0
	let count = 0
	let cur = this.head
	while (cur != null){
	    sum += cur.val
	    count++
	    cur=cur.next
	}
	return sum/count
    }
}

module.exports = LinkedList;



