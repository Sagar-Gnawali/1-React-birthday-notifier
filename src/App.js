import React, { useState } from 'react';
import {Data} from './data.component.js';
import List from './List.component.js';
function App() {
  const [manche, setManche] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3> {manche.length} birthday's today</h3>
        <List people={manche} />
        {manche.length !==0?<button onClick={() => setManche([])}>
          Got it Clear all
         </button>:<button onClick={()=>setManche(Data)}>Show all</button> }
      </section>
    </main>
  );
}
export default App;
