REAL DOM - MUTABLE - cause a lot pressure to broweser
    Every change on DOM, cause browser to revalidate CSS,
    compose graphics, paint graphics - CPU/GPU, memory

    More CPU/RAM - increase resource, battery will drain fast
    High latency

    create - document.createElement/append
    update - document.getElementById("row1cell1").textElement = 10
    delete - 
        <html>
        ..
        <body>
            ..<div>
            <table>
                <tr>
                    ..
                    <td id="row1cell1">RS 10</td> 

Working with REAL DOM is slow
-------
REACT Virtual DOM
    ensure developer doesn't touch real dom
    instead react let developers to build project using virtual dom
    Virtual DOM - IMMUTABLE - CREATE possible
       NO UPDATE, NO DELETE for virtual DOM

    React.createElement() - create and return virtual dom
            no changes to v.dom after creation

    what if we want to update the content?
        create another virtual dom with new value
    what if we want to delete the existing v.dom?
        create anotehr virtual dom [parent] which doesn't include 
        the virtual dom that you want to delete

---------

snapshot - v 0

<div>
 <p>counter</p>
 <span>10</span>
 <button click...>+1</button>
</div>

==> the value rendered changes from 10 to 11?

snapshot - v 1
create the whole v.dom

<div>
 <p>counter</p>
 <span>11</span>
 <button click...>+1</button>
</div>

DIFF between V 0   vs  V1

<span>11</span>

-- now it spot span elements in REAL DOM, PATCH the value to 11


Snaptshot 0 will be garbage collected

snapshot - v 2

<div>
 <p>counter</p>
 <span>12</span>
 <button click...>+1</button>
</div>

DIFF between V1   vs  V2

 <span>12</span>

snapshot V1 shall be garbage collected


----------------
1 component

100 rows x 10 cols x 5 dom elements = 5000 vDOM elements
Stock table - data is updated in every 500 milliseconds

every 500 ms, 
    create 5000 v.dom elements
    diff 5000 v.doms
    patch update on real time

<table> table has about 100 rows
    <tr..>
    <tr...>

    <tr> each row has 10 columns
      <td><div><i><span>99.56  -- each cell has 5 vDOM elements
      <td>
---------

Table Componnent

    Row 1 Componnent
            <td><div><i><span>99.56

    Row 2 Componnent - 1 td + 5 dom elements = 6 vdoms updated
            <td><div><i><span>65

            create 6 v.dom
            diff 6 v.dom 
            patch the changes


Large page as component
 progress as component - only progress bar is re-rendered
    0..1..2..3..


    import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
