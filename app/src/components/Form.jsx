import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Selection from './Selection';
import RadioSelect from './Radio';

const validationSchema = Yup.object().shape({
  age: Yup.string(),
  workExperience: Yup.string(),
  languageProficiency: Yup.string(),
  hasJobOffer: Yup.boolean(),
  hasFamily: Yup.boolean(),
  preferredLocation: Yup.string(),
  education: Yup.string()
});

const convertToSelection = options =>
  options.map(option => ({
    name: option,
    value: option
  }));

const fluencyOptions = convertToSelection([
  'fluent',
  'intermediate',
  'beginner'
]);

const regions = convertToSelection([
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon'
]);

const booleanOptions = [
  {
    name: 'Yes',
    value: true
  },
  {
    name: 'No',
    value: false
  }
];

function Form() {
  const initialValues = {
    age: '',
    workExperience: '',
    languageProficiency: '',
    hasJobOffer: false,
    hasFamily: false,
    preferredLocation: '',
    education: ''
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setSubmitting,
    values,
    setFieldValue
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async formValues => {
      setSubmitting(true);
      try {
        const res = await axios.post('http://127.0.0.1:5000/submit', formValues);
        console.log(res.data);
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
        console.error('Error submitting form', error);
      }
    }
  });

  return (
    <div>
      <header>
        <h1 className="text-base font-semibold leading-7 text-gray-900">Complete the form to find your best immigration route</h1>
      </header>

      <form className="flex flex-col gap-4 relative" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="workExperience"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Profesion
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="workExperience"
                    id="workExperience"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="sm:col-span-4 md:col-span-3">
                <label
                  htmlFor="education"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Highest level of Education
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="education"
                    id="education"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="sm:col-span-4 md:col-span-3">
                <div className="flex  flex-col sm:flex-row gap-y-8 gap-x-4">
                  <Selection
                    title={'English Proficiency'}
                    options={fluencyOptions}
                    onSelect={handleChange('languageProficiency')}
                  />

                  <Selection
                    title={'Preferred Destination'}
                    options={regions}
                    onSelect={handleChange('preferredLocation')}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <RadioSelect
                  title={'Do you have a job offer'}
                  options={booleanOptions}
                  onSelect={opt => setFieldValue('hasJobOffer', opt.value)}
                  selected={booleanOptions.find(
                    opt => opt.value === values.hasJobOffer
                  )}
                />
              </div>

              <div className="sm:col-span-2">
                <RadioSelect
                  title={'Do you have family in Canada'}
                  options={booleanOptions}
                  onSelect={opt => setFieldValue('hasFamily', opt.value)}
                  selected={booleanOptions.find(
                    opt => opt.value === values.hasFamily
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          {/* <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button> */}
          <button
            type="submit"
            className="w-60 h-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
