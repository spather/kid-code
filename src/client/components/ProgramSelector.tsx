import React, {FunctionComponent, MouseEvent} from 'react';

import {Programs} from '../lib/api';

type Props = {
  programs: Programs,
  onChange: (programName: string) => void,
};

const ProgramSelector: FunctionComponent<Props> = ({programs, onChange}) => {
  const children = Object.keys(programs).map(programName => (
    <a
      key={programName}
      href="#"
      className="dropdown-item"
      onClick={ (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onChange(programName);
      } }
    >
      <span>{programName}</span>
    </a>
  ));

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Programs</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProgramSelector;
