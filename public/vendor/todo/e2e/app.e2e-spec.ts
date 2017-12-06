import { MaterialTodo } from './app.po';

describe('material-todo App', function() {
  let page: MaterialTodo;

  beforeEach(() => {
    page = new MaterialTodo();
  });

  it('Toolbar should contain "TODO APP"', () => {
    page.navigateTo();
    expect(page.getToolbarText()).toContain('TODO APP');
  });
});
