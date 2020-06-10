import React, {FunctionComponent} from 'react';

type Props = Record<string, unknown>;

const App: FunctionComponent<Props> = () => {
  return (
    <div className="container">
      <h1 className="title">Hello, world!</h1>
    </div>
  );
};

export default App;
