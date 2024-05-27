import { Field, Label, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export default function Selection({ title, options, onSelect }) {
  return (
    <Field className="w-full">
      <Label className="text-sm/6 font-medium capitalize">{title}</Label>

      <div className="relative">
        <Select
          className={clsx(
            'mt-3 block w-full appearance-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6',
            'focus:outline-none data-[focus]:outline-2 capitalize data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
          )}
          onChange={onSelect}>
          {options.map(option => (
            <option
              key={option.value}
              value={options.value}
              className="capitalize">
              {option.name}
            </option>
          ))}
        </Select>
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
          aria-hidden="true"
        />
      </div>
    </Field>
  );
}
