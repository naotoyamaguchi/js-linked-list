/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  function getHead(x){
    return head;
  }

  function getTail(){
    var curNode = head;

    while(curNode !== null){
      if(curNode.next !== null){
        curNode = curNode.next;
      } else { 
        return curNode;
      }
    }
    return curNode;
  }

  function add(newValue){
    var tail = {
      value: newValue,
      next: null
    };
    if(head === null){
      head = tail;
    } else {
      getTail().next = tail;
    }
    return tail;
  }



  function remove(index){
    var previousNode = get(index-1);
    var currentNode = get(index);

    if(currentNode === false){
      return false;
    }
    if(index === 0){
      head = head.next;
      return;
    }
    if(currentNode === null){
      previousNode.next = null;
    } else {
      previousNode.next = currentNode.next;
      return previousNode;
    }
    // console.log("node before the index", beforeDeletedItem);
    // console.log("eds test", beforeDeletedItem.next = afterDeletedItem);
    // console.log("node at index", whatWeAreDeleting);
    // console.log("node at index's next value", afterDeletedItem);
  }


  function get(index){
    var curNode = head;
    var count = 0;

    while(curNode !== null){
      if(count === index){
        return curNode;
      } else {
        curNode = curNode.next;
        count ++;
      } 
    }
    if(curNode === null){
      return false;
    }
  }

  function insert(newValue, index){
    var previousNode = get(index-1);
    var currentNode = get(index);

    var newNode = {
      value: newValue,
      next: get(index)
    };

    // var newNode = {
    //   value: newValue,
    //   next: get(index+1)
    // };

    if(currentNode === false){
      return false;
    }
    if(index === 0){
      head = newNode;
      return;
    }
    // if(currentNode.next === null){
    //   previousNode.next = newNode;
    //   return;
    // }
     else {
      previousNode.next = newNode;
      return;
    }
  }


  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}

var test = linkedListGenerator();
test.add('abc');
test.add('def');
test.add('ghi');
test.add('jkl');