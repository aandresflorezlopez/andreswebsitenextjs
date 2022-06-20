import React from 'react';
import Typewriter from 'typewriter-effect';

import clsx from 'clsx';

const description = ['Hello guys...'];

// Menlo-Regular, Menlo, monospace

const Terminal = () => {
  return (
    <div
      id="terminal"
      className={clsx(
        'flex flex-col m-auto w-11/12 h-2/3',
        'md:w-8/12',
        'bg-primary-900 rounded-md'
      )}
    >
      {/* terminal header */}
      <div id="terminal-header" className="flex flex-row">
        <div
          id="terminal-buttons"
          className={clsx('flex flex-row w-2/12 justify-around p-4')}
        >
          <div className={clsx('w-6 h-6 bg-redMac rounded-full flex')}></div>
          <div className={clsx('w-6 h-6 bg-yellowMac rounded-full flex')}></div>
          <div className={clsx('w-6 h-6 bg-greenMac rounded-full flex')}></div>
        </div>
        <div id="terminal-tabs" className="flex w-11/12">
          <div className="flex w-2/12 justify-center items-center pt-4 pb-4 text-primary-50 font-menlo border-b-2 border-solid">
            about-me
          </div>
        </div>
      </div>
      {/* terminal body */}
      <div id="terminal-body" className="p-4 text-green font-menlo">
        <p className="mb-2">
          <span className="animate-pulse">&gt;</span> ~/Code/andresflorezlopez:
        </p>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('<strong>You: </strong>')
              .typeString('Hello, how are you?')
              .pauseFor(2500)
              .typeString('<br/>')
              .typeString('<strong>Andres Florez: </strong>')
              .typeString('I am fine thanks, how are you?')
              .pauseFor(2500)
              .typeString('<br/>')
              .typeString('<strong>You: </strong> ')
              .typeString('I am great!')
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default Terminal;
