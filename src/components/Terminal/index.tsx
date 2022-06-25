import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

import clsx from 'clsx';

const description = ['Hello guys...'];

// Menlo-Regular, Menlo, monospace
// `Hello guys... \n -- I'm Andres Florez as engineer that love beer, coding, travel and dream to become a DJ's some day`,

const TerminalHeader = () => {
  return (
    <div id="terminal-header" className="flex flex-row">
      <div
        id="terminal-buttons"
        className={clsx('flex flex-row w-4/12 justify-around p-4', 'md:w-2/12')}
      >
        <div
          className={clsx(
            'w-4 h-4 text-primary-50 justify-center',
            'lg:w-6 lg:h-6 bg-redMac rounded-full flex'
          )}
        />
        <div
          className={clsx(
            'w-4 h-4',
            'lg:w-6 lg:h-6 bg-yellowMac rounded-full flex'
          )}
        />
        <div
          className={clsx(
            'w-4 h-4',
            'lg:w-6 lg:h-6 bg-greenMac rounded-full flex'
          )}
        />
      </div>
      <div id="terminal-tabs" className="flex w-11/12">
        <div
          className={clsx(
            'flex w-4/12 justify-center items-center pt-4 pb-4 text-primary-50 font-menlo border-b-2 border-solid',
            'md:w-3/12'
          )}
        >
          about-me
        </div>
      </div>
    </div>
  );
};

const Terminal = () => {
  const body = useRef<HTMLDivElement>(null);

  const makeScrollDown = () => {
    body.current?.scrollTo({
      top: body.current?.scrollHeight - body.current?.clientHeight,
    });
  };

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
      <TerminalHeader />
      {/* terminal body */}
      <div
        id="terminal-body"
        className="p-4 font-menlo overflow-auto"
        ref={body}
      >
        <p className="mb-2 text-green">
          <span className="animate-pulse">&gt;</span>{' '}
          <span className="text-primary-50">~/Code/andresflorezlopez:</span>
        </p>
        <div className="text-green">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString('Hello guys... ')
                .pauseFor(1000)
                .typeString('how r u?')
                .pauseFor(2500)
                .typeString('<br/>')
                .typeString(
                  `thanks for visitting my personal website that is still under construction.`
                )
                .typeString('<br/>')
                .typeString('<br/>')
                .pauseFor(2500)
                .callFunction(() => {
                  makeScrollDown();
                })
                .typeString(
                  `So, I'm Andres Florez. I'm an engineer that love...`
                )
                .typeString('<br/>')
                .pauseFor(2500)
                .callFunction(() => {
                  makeScrollDown();
                })
                .typeString(
                  ` travel, coding, enjoy the life and dream to become a DJ some day`
                )
                .typeString('<br/>')
                .typeString('<br/>')
                .pauseFor(2500)
                .callFunction(() => {
                  makeScrollDown();
                })
                .typeString(
                  'I have more than 10 years of experience in the tech industry'
                )
                .typeString('<br/>')
                .typeString('<br/>')
                .pauseFor(2500)
                .typeString('I hope you enjoy your stay in my web site')
                .callFunction(() => {
                  makeScrollDown();
                })
                .start();
            }}
          />
          <span className="text-redMac mt-4">
            <br />
            <br />
            {'(warning): Error code 400 -- site under construction'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
