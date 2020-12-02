import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Nav from './components/Nav';

const items = [
  {
    title: 'Hook 是什麼？',
    content: 'Hook 是 React 16.8 中增加的新功能。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。',
  },
  {
    title: '為什麼需要 Hooks？',
    content: '(1) Hook 讓你不需要改變 component 階層就能重用 stateful 的邏輯。這讓在許多 component 之間共用或是與社群共用 Hook 很簡單。(2) Hook 讓你把一個 component 拆分成更小的 function，這基於什麼部分是相關的（像是設置一個 subscription 或是抓取資料），而不是強制基於 lifecycle 方法來分拆。你還可以選擇使用 reducer 來管理 component 的內部 state，使其更具可預測性。(3) Hook 讓你不需要 class 就能使用更多 React 的功能。 從概念上來看，React component 一直都更接近 function。Hook 擁抱 function，但沒有犧牲 React 的實際精神。',
  },
  {
    title: '我應該使用 Hook、Class 或是兩者兼具？',
    content: '當你準備好時，我們鼓勵開始使用 Hook 撰寫你新的 component。你不可以在 class component 內使用 Hook，但你絕對可以在單個 tree 中將 class 和 function component 與 Hook 混合使用。無論是 class 或 function component，使用 Hook 是該 component 實作的細節。從長遠來看，我們期待 Hook 可以是大家撰寫 React component 的主要方式。',
  },
];

const options = [
  {
    label: '紅色',
    value: 'red',
  },
  {
    label: '藍色',
    value: 'blue',
  },
  {
    label: '綠色',
    value: 'green',
  },
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Nav />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="選個顏色"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
