import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CRSScore = e => {
  const [result, setResult] = useState(0);

  const [formValues, setFormValues] = useState({
    age: '',
    hasSpouse: false,
    educationLevel: '',
    firstLanguage: '',
    secondLanguage: '',
    workExperience: '',
    spouseEducationLevel: '',
    spouseFirstLanguage: '',
    spouseWorkExperience: '',
    CblScore: '',
    transferableEducation: '',
    foreignWork: '',
    foreignCanadianWork: '',
    CblScoreRangeExt: '',
    CblWithCert: '',
    additional: ''
  });

  const handleChange = e =>
    setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

  function calculateCRS() {
    let score = 0;

    const {
      age,
      hasSpouse,
      educationLevel,
      firstLanguage,
      secondLanguage,
      workExperience,
      spouseEducationLevel,
      spouseFirstLanguage,
      spouseWorkExperience,
      CblScore,
      transferableEducation,
      foreignCanadianWork,
      foreignWork,
      CblScoreRangeExt,
      CblWithCert,
      additional
    } = formValues;
    score +=
      age <= 17 && (hasSpouse || !hasSpouse)
        ? 0
        : age === 18
        ? hasSpouse
          ? 90
          : 99
        : age === 19
        ? hasSpouse
          ? 95
          : 105
        : age >= 20 && age <= 29
        ? hasSpouse
          ? 100
          : 110
        : age === 30
        ? hasSpouse
          ? 95
          : 105
        : age === 31
        ? hasSpouse
          ? 90
          : 99
        : age === 32
        ? hasSpouse
          ? 85
          : 94
        : age === 33
        ? hasSpouse
          ? 80
          : 88
        : age === 34
        ? hasSpouse
          ? 75
          : 83
        : age === 35
        ? hasSpouse
          ? 70
          : 77
        : age === 36
        ? hasSpouse
          ? 65
          : 72
        : age === 37
        ? hasSpouse
          ? 60
          : 66
        : age === 38
        ? hasSpouse
          ? 55
          : 61
        : age === 39
        ? hasSpouse
          ? 50
          : 55
        : age === 40
        ? hasSpouse
          ? 45
          : 50
        : age === 41
        ? hasSpouse
          ? 35
          : 39
        : age === 42
        ? hasSpouse
          ? 25
          : 28
        : age === 43
        ? hasSpouse
          ? 15
          : 17
        : age === 44
        ? hasSpouse
          ? 5
          : 6
        : age >= 45
        ? 0
        : 0;

    switch (educationLevel) {
      case 'secondary':
        score += hasSpouse ? 28 : 30;
        break;
      case 'one_year':
        score += hasSpouse ? 84 : 90;
        break;
      case 'two_years':
        score += hasSpouse ? 91 : 98;
        break;
      case 'bachelors':
        score += hasSpouse ? 112 : 120;
        break;
      case 'atleast_two_cert':
        score += hasSpouse ? 119 : 128;
        break;
      case 'masters':
        score += hasSpouse ? 126 : 135;
        break;
      case 'phd':
        score += hasSpouse ? 140 : 150;
        break;
      default:
    }

    switch (firstLanguage) {
      case 'below_CBL_4':
        score += hasSpouse ? 0 : 0;
        break;
      case 'CBL_4_5':
        score += hasSpouse ? 6 : 6;
        break;
      case 'CLB_6':
        score += hasSpouse ? 8 : 9;
        break;
      case 'CLB_7':
        score += hasSpouse ? 16 : 17;
        break;
      case 'CLB_8':
        score += hasSpouse ? 22 : 23;
        break;
      case 'CLB_9':
        score += hasSpouse ? 29 : 31;
        break;
      case 'CLB_10_more':
        score += hasSpouse ? 32 : 34;
        break;
      default:
        break;
    }

    switch (secondLanguage) {
      case 'CBL_4_less':
        score += hasSpouse ? 0 : 0;
        break;
      case 'CBL_5_6':
        score += hasSpouse ? 1 : 1;
        break;
      case 'CLB_7_8':
        score += hasSpouse ? 3 : 3;
        break;
      case 'CLB_9_more':
        score += hasSpouse ? 6 : 6;
        break;
      default:
        break;
    }

    switch (workExperience) {
      case 'none_less_year':
        score += hasSpouse ? 0 : 0;
        break;
      case '1_year':
        score += hasSpouse ? 35 : 40;
        break;
      case '2_years':
        score += hasSpouse ? 46 : 53;
        break;
      case '3_years':
        score += hasSpouse ? 56 : 64;
        break;
      case '4_years':
        score += hasSpouse ? 63 : 72;
        break;
      case '5_years_more':
        score += hasSpouse ? 70 : 80;
        break;
      default:
        break;
    }

    switch (spouseEducationLevel) {
      case 'less_secondary_spouse':
        score += 0;
        break;
      case 'secondary_spouse':
        score += 2;
        break;
      case 'one_year_spouse':
        score += 6;
        break;
      case 'two_years_spouse':
        score += 7;
        break;
      case 'bachelors_spouse':
        score += 8;
        break;
      case 'atleast_two_cert_spouse':
        score += 9;
        break;
      case 'masters_spouse':
        score += 10;
        break;
      case 'phd_spouse':
        score += 10;
        break;
      default:
        break;
    }

    switch (spouseFirstLanguage) {
      case 'CBL_4_less':
        score += 0;
        break;
      case 'CBL_5_6':
        score += 1;
        break;
      case 'CLB_7_8':
        score += 3;
        break;
      case 'CLB_9_more':
        score += 5;
        break;
      default:
        break;
    }

    switch (spouseWorkExperience) {
      case 'none_less_year':
        score += 0;
        break;
      case '1_year':
        score += 5;
        break;
      case '2_years':
        score += 7;
        break;
      case '3_years':
        score += 8;
        break;
      case '4_years':
        score += 9;
        break;
      case '5_years_more':
        score += 10;
        break;
      default:
        break;
    }

    switch (transferableEducation) {
      case 'trans_less_secondary':
        score += CblScore === 'clb_7_more' ? 0 : 0;
        break;
      case 'trans_post_secondary':
        score += CblScore === 'clb_7_more' ? 13 : 25;
        break;
      case 'trans_two_years_more':
        score += CblScore === 'clb_7_more' ? 25 : 50;
        break;
      case 'trans_master':
        score += CblScore === 'clb_7_more' ? 25 : 50;
        break;
      case 'trans_phd':
        score += CblScore === 'clb_7_more' ? 25 : 50;
        break;
      default:
        break;
    }

    switch (foreignWork) {
      case 'No_foreign_exp':
        score += CblScore === 'clb_7_more' ? 0 : 0;
        break;
      case '1_2_years_exp':
        score += CblScore === 'clb_7_more' ? 13 : 25;
        break;
      case '3_years_more_exp':
        score += CblScore === 'clb_7_more' ? 25 : 50;
        break;
      default:
        break;
    }

    switch (foreignCanadianWork) {
      case 'No_foreign_Canadian_exp':
        score +=
          workExperience === '1_year'
            ? 0
            : workExperience === '2_years'
            ? 0
            : 0;
        break;
      case '1_2_years_Canadian_exp':
        score +=
          workExperience === '1_year'
            ? 13
            : workExperience === '2_years'
            ? 25
            : 25;
        break;
      case '3_years_more_Canadian_exp':
        score +=
          workExperience === '1_year'
            ? 25
            : workExperience === '2_years'
            ? 50
            : 50;
        break;
      default:
        break;
    }

    switch (CblWithCert) {
      case 'with_cert':
        score += CblScoreRangeExt === 'clb_5_more' ? 25 : 50;
        break;
      default:
        break;
    }

    switch (additional) {
      case 'bro_sis':
        score += 15;
        break;
      case 'NCLC_7_higher_4_lower_eng':
        score += 25;
        break;
      case 'NCLC_7_higher_5_more_eng':
        score += 50;
        break;
      case 'Post_secondary_1_2_yrs':
        score += 15;
        break;
      case 'Post_secondary_3_yrs':
        score += 30;
        break;
      case 'arranged_employment_NOC_0':
        score += 200;
        break;
      case 'arranged_employment_NOC_1':
        score += 50;
        break;
      case 'provincial_nom':
        score += 600;
        break;
      default:
        break;
    }

    setResult(score);
  }

  return (
    <>
      <div className="px-2.5">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            CRS Criteria - Express Entry
          </h1>
          <h2 className="text-base font-normal leading-7 text-gray-900 mt-5 sm:mt-2.5">
            Complete the form to calculate your CRS score
          </h2>
        </header>

        <form className="max-w-6xl mx-auto my-5">
          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="age">
              Age:
            </label>
            <input
              onChange={handleChange}
              name="age"
              type="number"
              id="age"
              min="0"
              max="100"
              className="my-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-sm md:leading-6"
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="hasSpouse">
              Spouse or common-law partner:
            </label>
            <select
              name="hasSpouse"
              id="hasSpouse"
              onChange={e => {
                setFormValues(prev => ({
                  ...prev,
                  hasSpouse: !!Number(e.target.value)
                }));
              }} //one
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border">
              <option value="">Select an item</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="educationLevel">
              Level of Education:
            </label>

            <select
              name="educationLevel"
              onChange={handleChange}
              id="educationLevel"
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border">
              <option value="">Select an item</option>
              <option value="none">None or less than secondary</option>
              <option value="secondary">Secondary (high school diploma)</option>
              <option value="one_year">
                One-year degree, diploma or certificate from a university,
                college, trade or technical school, or other institute
              </option>
              <option value="two_years">
                Two-year program at a university, college, trade or technical
                school, or other institute
              </option>
              <option value="bachelors">
                Bachelor's degree OR a three or more year program at a
                university, college, trade or technical school, or other
                institute
              </option>
              <option value="atleast_two_cert">
                Two or more certificates, diplomas, or degrees. One must be for
                a program of three or more years
              </option>
              <option value="masters">
                Master's degree, OR professional degree needed to practice in a
                licensed profession
              </option>
              <option value="phd">
                Doctoral level university degree (Ph.D.)
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="firstLanguage">
              Official languages proficiency - first official language:
            </label>
            <select
              onChange={handleChange}
              name="firstLanguage"
              id="firstLanguage"
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border">
              <option value="">Select an item</option>
              <option value="below_CBL_4">
                Less than Canadian Language Benchmark (CLB 4)
              </option>
              <option value="CBL_4_5">CLB 4 or 5</option>
              <option value="CLB_6">CLB 6</option>
              <option value="CLB_7">CLB 7</option>
              <option value="CLB_8">CLB 8</option>
              <option value="CLB_9">CLB 9</option>
              <option value="CLB_10_more">CLB 10 or more</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="secondLanguage">
              Official languages proficiency - second official language:
            </label>
            <select
              onChange={handleChange}
              name="secondLanguage"
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="secondLanguage">
              <option value="">Select an item</option>
              <option value="CBL_4_less">
                Canadian Language Benchmark (CLB 4) or less
              </option>
              <option value="CBL_5_6">CLB 5 or 6</option>
              <option value="CLB_7_8">CLB 7 or 8</option>
              <option value="CLB_9_more">CLB 9 or more</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="workExperience">
              Canadian work experience
            </label>
            <select
              onChange={handleChange}
              name="workExperience"
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="workExperience">
              <option value="">Select an item</option>
              <option value="none_less_year">None or less than a year</option>
              <option value="1_year">1 year</option>
              <option value="2_years">2 year</option>
              <option value="3_years">3 year</option>
              <option value="4_years">4 year</option>
              <option value="5_years_more">5 years or more</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              aria-disabled={!formValues.hasSpouse}
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="spouseEducationLevel">
              Spouse’s or common-law partner’s level of education
            </label>
            <select
              name="spouseEducationLevel"
              onChange={handleChange}
              disabled={!formValues.hasSpouse}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="spouseEducationLevel">
              <option value="">Select an item</option>
              <option value="less_secondary_spouse">
                Less than secondary school (high school)
              </option>
              <option value="secondary_spouse">
                Secondary school (high school graduation)
              </option>
              <option value="one_year_spouse">
                One-year program at a university, college, trade or technical
                school, or other institute
              </option>
              <option value="two_years_spouse">
                Two-year program at a university, college, trade or technical in
                school, or other institute
              </option>
              <option value="bachelors_spouse">
                Bachelor's degree OR a three or more year program at a
                university, college, trade or technical school, or other
                institute
              </option>
              <option value="atleast_two_cert_spouse">
                Two or more certificates, diplomas, or degrees. One must be for
                a program of three or more years
              </option>
              <option value="masters_spouse">
                Master's degree, or professional degree needed to practice in a
                licensed profession
              </option>
              <option value="phd_spouse">
                Doctoral level university degree (PhD)
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              aria-disabled={!formValues.hasSpouse}
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="spouseFirstLanguage">
              Spouse's or common-law partner's official languages proficiency -
              first official language:
            </label>
            <select
              name="spouseFirstLanguage"
              onChange={handleChange}
              disabled={!formValues.hasSpouse}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="spouseFirstLanguage">
              <option value="">Select an item</option>
              <option value="spouse_CBL_4_below">
                Canadian Language Benchmark (CLB 4) or less
              </option>
              <option value="spouse_CBL_5_6">CLB 5 or 6</option>
              <option value="spouse_CLB_7_8">CLB 7 or 8</option>
              <option value="spouse_CLB_9_more">CLB 9 or more</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              aria-disabled={!formValues.hasSpouse}
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="spouseWorkExperience">
              Spouse Canadian work experience
            </label>
            <select
              name="spouseWorkExperience"
              onChange={handleChange}
              disabled={!formValues.hasSpouse}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="spouseWorkExperience">
              <option value="">Select an item</option>
              <option value="spouse_none_less_year">
                None or less than a year
              </option>
              <option value="spouse_1_year">1 year</option>
              <option value="spouse_2_years">2 year</option>
              <option value="spouse_3_years">3 year</option>
              <option value="spouse_4_years">4 year</option>
              <option value="spouse_5_years_more">5 years or more</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="CblScore">
              Skill transferability factors - official language proficiency CLB
              score range
            </label>
            <select
              name="CblScore"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="CblScore">
              <option value="">Select an item</option>
              <option value="clb_7_more">
                Points for CLB 7 or more on all first official language
                abilities, with one or more under CLB 9
              </option>
              <option value="clb_9_more">
                Points for CLB 9 or more on all four first official language
                abilities
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="transferableEducation">
              Skill transferability factors - With good official language
              proficiency ( [CLB] 7 or higher) and a post-secondary degree
            </label>
            <select
              name="transferableEducation"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="transferableEducation">
              <option value="">Select an item</option>
              <option value="trans_less_secondary">
                Secondary school (high school) credential or less
              </option>
              <option value="trans_post_secondary">
                Post-secondary program credential of one year or longer
              </option>
              <option value="trans_two_years_more">
                Two or more post-secondary program credentials AND at least one
                of these credentials was issued on completion of a
                post-secondary program of three years or longer
              </option>
              <option value="trans_master">
                A university-level credential at the master’s level or at the
                level of an entry-to-practice professional degree for an
                occupation listed in the National Occupational Classification
                matrix at Skill Level A for which licensing by a provincial
                regulatory body is required
              </option>
              <option value="trans_phd">
                A university-level credential at the doctoral level
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="foreignWork">
              Years of experience (Foreign work experience – With good official
              language proficiency)
            </label>
            <select
              name="foreignWork"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="foreignWork">
              <option value="">Select an item</option>
              <option value="No_foreign_exp">No foreign work experience</option>
              <option value="1_2_years_exp">
                1 or 2 years of foreign work experience
              </option>
              <option value="3_years_more_exp">
                3 years or more of foreign work experience
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="foreignCanadianWork">
              Foreign work experience – With Canadian work experience
            </label>
            <select
              name="foreignCanadianWork"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="foreignCanadianWork">
              <option value="">Select an item</option>
              <option value="No_foreign_Canadian_exp">
                No foreign work experience
              </option>
              <option value="1_2_years_Canadian_exp">
                1 or 2 years of foreign work experience
              </option>
              <option value="3_years_more_Canadian_exp">
                3 years or more of foreign work experience
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="CblScoreRangeExt">
              Check if your official language proficiency (Canadian Language
              Benchmark Level [CLB]) falls within these range
            </label>
            <select
              name="CblScoreRangeExt"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="CblScoreRangeExt">
              <option value="">Select an item</option>
              <option value="clb_5_more">
                Points for certificate of qualification + CLB 5 or more on all
                first official language abilities, one or more under 7
              </option>
              <option value="clb_7_9_more">
                Points for certificate of qualification + CLB 7 or more on all
                four first official language abilities
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="CblWithCert">
              Certificate of qualification (trade occupations) – With good
              official language proficiency (Canadian Language Benchmark Level
              [CLB] 5 or higher)
            </label>
            <select
              name="CblWithCert"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="CblWithCert">
              <option value="">Select an item</option>
              <option value="with_cert">
                With a certificate of qualification
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="additional">
              Additional points:
            </label>
            <select
              name="additional"
              onChange={handleChange}
              className="w-full p-2 my-1 mx-0  border rounded-[4px] border-[#ccc] box-border"
              id="additional">
              <option value="">Select an item</option>
              <option value="bro_sis">
                Brother or sister living in Canada who is a citizen or permanent
                resident of Canada
              </option>
              <option value="NCLC_7_higher_4_lower_eng">
                Scored NCLC 7 or higher on all four French language skills and
                scored CLB 4 or lower in English (or didn’t take an English
                test)
              </option>
              <option value="NCLC_7_higher_5_more_eng">
                Scored NCLC 7 or higher on all four French language skills and
                scored CLB 5 or higher on all four English skills
              </option>
              <option value="Post_secondary_1_2_yrs">
                Post-secondary education in Canada - credential of one or two
                years
              </option>
              <option value="Post_secondary_3_yrs">
                Post-secondary education in Canada - credential three years or
                longer
              </option>
              <option value="arranged_employment_NOC_0">
                Arranged employment – NOC TEER 0 Major group 00
              </option>
              <option value="arranged_employment_NOC_1">
                Arranged employment – NOC TEER 1, 2 or 3, or any TEER 0 other
                than Major group 00
              </option>
              <option value="provincial_nom">
                Provincial or territorial nomination
              </option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">
              {result ? `Your CRS Score is ${result}` : ''}
            </div>

            <div className="flex items-center justify-end gap-x-1 sm:gap-x-6">
              <Link
                to="/"
                className="w-40 text-center rounded-md bg-white border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Back
              </Link>

              <button
                onClick={calculateCRS}
                className="w-40 rounded-md border bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Calculate Score
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CRSScore;
