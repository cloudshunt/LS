/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist toArray returns copy of todos', () => {
    let todos = list.todos;
    expect(list.toArray()).toEqual( todos);
    expect(list.toArray()).toEqual( [todo1,todo2,todo3]);
  });

  test('check if first method returns the first todo item', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('check if last method returns the last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('check to see if shift method remoes and returns first item in the list', () => {
    let firstItem = list.shift();
    expect(firstItem).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2,todo3]);

  });

  test('check to see if pop method remoes and returns last item in the list', () => {
    let lastItem = list.pop();
    expect(lastItem).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1,todo2]);

  });

  test('check if isDone method returns true if all items in the list are done, false otherwise', () => {

    //there still are items not done, should return false
    expect(list.isDone()).toEqual(false);

    //check done on everything
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    // all todo should be done now in list 
    expect(list.isDone()).toEqual(true);
  });

  test('check if TypeError occurs when attempt to add an item that isnt Todo Object', () => {
    // i cant type all types here
    expect(()=> list.add('zyzz')).toThrow(TypeError);
    expect(()=> list.add(1)).toThrow(TypeError);
    expect(()=> list.add({})).toThrow(TypeError);
    expect(()=> list.add(list)).toThrow(TypeError);
  });

  test('itemAt returns the item at given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    let indexNum  = 100;
    expect(()=> list.itemAt(indexNum)).toThrow(ReferenceError);
  });

  test("markDoneAt sets a todolist's todo object `done` state as true", () => {

    list.markDoneAt(0);
    list.markDoneAt(1);
    expect(todo1.done).toEqual(true);
    expect(todo2.done).toEqual(true);
    expect(todo3.done).toEqual(false);

    let indexNum  = 100;
    expect(() => list.markDoneAt(indexNum)).toThrow(ReferenceError);
  });

  test("markUndoneAt sets a todolist's todo object `done` state as false", () => {

    list.markDoneAt(0);
    expect(todo1.done).toEqual(true);
    list.markUndoneAt(0);
    expect(todo1.done).toEqual(false);

    let indexNum  = 100;
    expect(() => list.markUndoneAt(indexNum)).toThrow(ReferenceError);
  });

  test("markAllDone sets a all of todolist's object `done` state as true", () => {
    expect(todo1.isDone()).toEqual(false);
    expect(todo2.isDone()).toEqual(false);
    expect(todo3.isDone()).toEqual(false);

    list.markAllDone();
    expect(todo1.isDone()).toEqual(true);
    expect(todo2.isDone()).toEqual(true);
    expect(todo3.isDone()).toEqual(true);
    expect(list.isDone()).toEqual(true);
  });

  test("removeAt removes an object from todolist based on index", () => {
    expect(() => list.removeAt(100)).toThrow(ReferenceError);

    expect(list.removeAt(2)).toEqual([todo3]);
    expect(list.toArray()).toEqual([todo1,todo2]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });
  
  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    list.markDoneAt(1);

    expect(list.toString()).toBe(string);
  });


  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('test to see if custom forEach works correctly', () => {
    let testCallback = function(todo, idx) {
      if (idx === 0) expect(todo).toEqual(todo1);
      if (idx === 1) expect(todo).toEqual(todo2);
      if (idx === 2) expect(todo).toEqual(todo3);
    }

    list.forEach(testCallback);
  });

  test('see if filter works with todolist', () => {
    todo1.markDone();
    let testlist = new TodoList(list.title);
    testlist.add(todo1);

    expect(testlist.title).toBe(list.title);

    let filteredList = list.filter(todo => todo.isDone());
    expect(filteredList).toEqual(testlist);
  });
});
