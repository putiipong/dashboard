import React, { useState } from 'react'

import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function GridLayoutCustom(props) {

  const initData = [0, 1, 2, 3, 4].map(function (i, key, list) {
    return {
      i: i.toString(),
      x: i * 1,
      y: 0,
      w: 1,
      h: 1,
      add: i === (list.length - 1)
    };
  })

  const [items, setItems] = useState(initData)
  const [newCounter, setNewCounter] = useState(0)


  const createElement = (el) => {

    const removeStyle = {
      position: "absolute",
      left: "2px",
      top: 0,
      cursor: "pointer"
    };

    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} className="box-layout  d-flex justify-content-center align-items-center">
        {el.add ? (
          <span
            className="add text box-layout"
            onClick={() => onAddItem()}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">{i} </span>
        )}
        {!el.add && <span
          className="remove"
          style={removeStyle}
          onClick={() => onRemoveItem(i)}
        >
          x
        </span>}

      </div>
    );
  }

  const onAddItem = () => {
    /*eslint no-console: 0*/
    console.log("adding", "n" + items.length);
    setItems(
      items.concat({
        i: "n" + newCounter,
        x: (items.length * 1) % (6),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 1
      })
    )
    setNewCounter(newCounter + 1)
  }

  // We're using the cols coming back from this to calculate where to add new
  const onBreakpointChange = (breakpoint, cols) => {
    // console.log(`breakpoint, cols`, breakpoint, cols)
    // this.setState({
    //   breakpoint: breakpoint,
    //   cols: cols
    // });
  }

  const onLayoutChange = (layout) => {
    if (props.onLayoutChange)
      props.onLayoutChange(layout);
    // this.setState({ layout: layout });
  }

  const onRemoveItem = (i) => {
    console.log("removing", i);
    // this.setState({ items: _.reject(this.state.items, { i: i }) });
    setItems(_.reject(items, { i: i }))
  }

  return (
    <ResponsiveReactGridLayout
      style={{ height: '500px' }}
      className="layout"
      onLayoutChange={onLayoutChange}
      onBreakpointChange={onBreakpointChange}
      // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      // width={1200}
      // rowHeight={30}
      allowOverlap={true}
      rowHeight={30}
      width={1200}
    // {...props}
    >
      {/* {_.map(items, el => createElement(el))} */}

      {items.map(el => createElement(el))}
    </ResponsiveReactGridLayout>
  )

  // return (
  //   <GridLayout className="layout"
  //     layout={layout} rowHeight={30} width={1200}
  //     onLayoutChange={onLayoutChange}
  //     allowOverlap={true}>
  //     <div className="box-layout" key="a">a</div>
  //     <div className="box-layout" key="b">b</div>
  //     <div className="box-layout" key="c">c</div>
  //   </GridLayout>
  // )
}
