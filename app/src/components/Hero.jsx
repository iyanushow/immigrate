/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-2xl py-32 sm:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find your Immigration Path
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A quick way to find your most viable immagration path into Canada.
            Check your CRS score, or find your ideal entry path.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-2 sm:gap-x-4">
          <Link
            to="path"
            className="rounded-md border border-indigo-600 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Find Immigration Path
          </Link>
          <Link
            to="crs-score"
            className="rounded-md bg-white border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Check CRS Score
          </Link>
        </div>
      </div>
    </div>
  );
}
