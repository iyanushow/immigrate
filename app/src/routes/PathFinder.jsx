import React from 'react';
import Form from '../components/Form';
import { Response } from '../components/Loader';

const PathFinder = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="container mx-auto pb-5 sm:px-2.5 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Form />
        </div>
      </div>

      <Response />
    </>
  );
};

export default PathFinder;
