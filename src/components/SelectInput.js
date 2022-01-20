import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/solid'

const SelectInput = ({ option, selectedValue, onChangeSelect }) => {
    return (
        <Listbox value={selectedValue} onChange={onChangeSelect}>
            <div className="relative">
                <Listbox.Button
                    className="relative w-full p-3 text-left bg-zinc-900 rounded-md cursor-default focus:outline-none sm:text-sm focus:ring-0 border-b-2 border-gray-500">
                    <span className="block truncate">{selectedValue.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        className="absolute z-10 w-full py-1 mt-1 text-base bg-zinc-900 rounded-md overflow-auto  max-h-52 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-zinc-300"
                    >
                        {option.map((person, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `${ active ? 'text-zinc-900 bg-zinc-600 font-bold' : 'text-gray-300' }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                }
                                value={person}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            className={`${ selected ? 'font-medium' : 'font-normal'
                                                } block truncate`}
                                        >
                                            {person.name}
                                        </span>

                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default SelectInput
