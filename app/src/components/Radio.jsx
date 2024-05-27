import {  Radio, RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function RadioSelect({ title, options, selected, onSelect }) {
  return (
    <div className="w-full">
      <h2 className="text-sm/6 font-medium capitalize">{title}</h2>

      <div className="w-full  mt-2">
        <RadioGroup
          by="value"
          value={selected}
          onChange={selected => onSelect(selected)}
          aria-label={title}
          className="space-y-2">
          {options.map(option => (
            <Radio
              key={option.name}
              value={option}
              className="sm-w-[80%] group relative flex cursor-pointer rounded-lg bg-black/5 p-2 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-black/10">
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-black">{option.name}</p>
                </div>
                <CheckCircleIcon className="size-6 fill-black opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
