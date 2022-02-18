import React from 'react'
import { Button, Row } from 'react-bootstrap'
import styles from '../styles/Search.module.css'

const SearchTab = ({
  totalYear,
  searchByYear,
  handleYearChange,
  totalCategory,
  searchByCategory,
  hanldeCategoryChange,
  clearFilters,
}) => {
  const newYears = [...totalYear]
  const newCategories = [...totalCategory]

  return (
    <div className={styles.container}>
      <Row>
        {newYears && (
          <div>
            <label className='mb-2'>
              <strong style={{ color: 'black' }}>Find By Year</strong>
            </label>
            <select
              name='year'
              className='form-control'
              onChange={handleYearChange}
              value={searchByYear}
            >
              <option value=''>Select Year</option>
              {newYears?.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}
        <br />
        <br />

        <br />
        {newCategories && (
          <div>
            <label className='mb-2'>
              <strong style={{ color: 'Black' }}>Find By Category</strong>
            </label>
            <select
              name='searchByCategory'
              className='form-control'
              onChange={hanldeCategoryChange}
              value={searchByCategory}
            >
              <option value=''>Select Category</option>
              {newCategories?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {searchByCategory == '' && searchByYear == '' ? (
          ''
        ) : (
          <Button
            className='text-center mt-3 ml-2'
            style={{ width: '200px', marginLeft: '10px' }}
            onClick={() => clearFilters()}
          >
            Clear Filter
          </Button>
        )}
      </Row>
      <br />
    </div>
  )
}

export default SearchTab
