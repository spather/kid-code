import React, {FunctionComponent, useState} from 'react';

import Grid from './Grid';
import programs from '../programs/programs';
import ProgramSelector from './ProgramSelector';

type Props = Record<string, unknown>;

const App: FunctionComponent<Props> = () => {
  const [programName, setProgramName] = useState('example');
  return (
    <div className="container">
      <h1 className="title">Hello, world!</h1>
      <div className="columns">
        <div className="column is-one-third">
          <ProgramSelector programs={programs} onChange={setProgramName} />
        </div>
        <div className="column">
          <Grid onGridReady={(api) => programs[programName](api)} />
        </div>
      </div>
    </div>
  );
};

export default App;
