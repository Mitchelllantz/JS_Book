let foo = 'bar';
{
  let foo = 'qux';
  console.log(foo);
}

console.log(foo);

/*Foo on line 3 will shadow line 1 foo but 
only for the scope of thr block
I added a console log to the block to show the shadiw */