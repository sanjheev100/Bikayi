import React, { useState, useEffect } from 'react'
import { fetchNobelPrize } from '../api/nobel'
import { UserTable, SearchTab, UserCard, SimpleLoader } from '../components'
import { Row, Col, Container, Table } from 'react-bootstrap'
import { Pagination } from 'antd'
const Home = () => {
  useEffect(() => {
    loadAllPrizes()
  }, [])

  var totalCategory = new Set()

  var totalYear = new Set([])

  var totalWinners = []

  //states
  const [nobleList, setNobleList] = useState([])
  const [searchByYear, setSearchByYear] = useState(0)
  const [searchByCategory, setSearchByCategory] = useState('')
  const [categoryAndYearData, setCategoryAndYearData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerpage] = useState(100)
  const [loading, setLoading] = useState(false)

  //fetching from api
  const loadAllPrizes = () => {
    setLoading(true)
    fetchNobelPrize().then((res) => {
      setNobleList(res.data)
      setLoading(false)
    })
  }

  //processing the data
  var repeatedUsers = {}
  var newSet = new Set()
  var MultipleTimesWinner = []

  if (nobleList.prizes) {
    nobleList?.prizes.forEach((singleElement) => {
      singleElement?.laureates?.forEach((laureate) => {
        if (singleElement.year >= 1900 && singleElement.year <= 2018) {
          if (laureate.id in repeatedUsers) {
            if (newSet.has(laureate.id)) {
              //pass
            } else {
              var multiWinnerUserObject = {
                year: singleElement.year,
                laureate: laureate,
                category: singleElement.category,
              }
              MultipleTimesWinner.push(multiWinnerUserObject)
              newSet.add(laureate.id)
            }
            var temp = repeatedUsers[laureate.id]
            temp = temp + 1
            repeatedUsers[laureate.id] = temp
          } else {
            repeatedUsers[laureate.id] = 1
          }

          var userObject = {
            year: singleElement.year,
            category: singleElement.category,
            firstname: laureate.firstname,
            surname: laureate.surname,
            id: laureate.id,
            motivation: laureate.motivation,
            share: laureate.share,
          }
          totalWinners.push(userObject)
          totalYear.add(singleElement.year)
          totalCategory.add(singleElement.category)
        }
      })
    })
  }

  //handle Filters
  const handleYearChange = (e) => {
    setSearchByYear(e.target.value)
  }

  const hanldeCategoryChange = (e) => {
    setSearchByCategory(e.target.value)
  }

  const yearFilter = (keyword) => (w) => w.year == keyword
  const categoryFilter = (keyword) => (w) => w.category == keyword

  useEffect(() => {
    if (searchByCategory && searchByYear) {
      categoryAndYearFilter(searchByYear, searchByCategory)
    }
  }, [searchByCategory, searchByYear])

  const categoryAndYearFilter = (keyword, keyword2) => {
    var yearFilteredData = totalWinners.filter(
      (winner) => winner.year == keyword
    )
    var categoryAndYearFiltered = yearFilteredData.filter(
      (winner) => winner.category == keyword2
    )

    setCategoryAndYearData(categoryAndYearFiltered)
  }

  //pagination
  const indexofLastUser = currentPage * userPerpage
  const indexofFirstUser = indexofLastUser - userPerpage
  var currentUsers = totalWinners.slice(indexofFirstUser, indexofLastUser)

  const changePage = (number) => {
    setCurrentPage(number)
  }

  const clearFilters = () => {
    setSearchByYear('')
    setSearchByCategory('')
  }

  //sorting

  return loading ? (
    <SimpleLoader />
  ) : (
    <>
      <div>
        <br />
        <Container className='container-fluid'>
          <>
            <Row>
              <h5 className='text-center'>MULTIPLE TIMES AWARD WINNERS</h5>
              {MultipleTimesWinner &&
                MultipleTimesWinner.map((winner, index) => (
                  <Col
                    key={index}
                    className='mb-3'
                    sm={12}
                    md={6}
                    lg={6}
                    xl={4}
                  >
                    <UserCard winner={winner} />
                  </Col>
                ))}
            </Row>
          </>
        </Container>
        <br />
        <Container>
          <Row className='justify-content-md-center'>
            <h4 className='text-center'> Winners List From (1901 -2018) </h4>

            <Col xs={12} md={6}>
              <SearchTab
                totalYear={totalYear}
                totalCategory={totalCategory}
                searchByYear={searchByYear}
                handleYearChange={handleYearChange}
                searchByCategory={searchByCategory}
                hanldeCategoryChange={hanldeCategoryChange}
                clearFilters={clearFilters}
              />
            </Col>
          </Row>
        </Container>
        {/* <div className='col-md-9'> */}

        <Table
          responsive
          className='table table-striped table-responsive table-bordered bg-light'
        >
          <thead className='thead-dark'>
            <tr>
              <th
                scope='col'
                className='text-center'
                style={{ color: 'black' }}
              >
                ID
              </th>
              <th
                className='text-center'
                scope='col'
                style={{ color: 'black' }}
              >
                First Name
              </th>
              <th
                className='text-center'
                scope='col'
                style={{ color: 'black' }}
              >
                SurName
              </th>
              <th
                className='text-center'
                scope='col'
                style={{ color: 'black' }}
              >
                Category
              </th>
              <th
                className='text-center'
                scope='col'
                style={{ color: 'black' }}
              >
                Year
              </th>
              <th
                className='text-center'
                scope='col'
                style={{ color: 'black' }}
              >
                Motivation
              </th>
              <th
                className='text-center'
                scope='col'
                style={{ color: 'black' }}
              >
                Share
              </th>
            </tr>
          </thead>
          <tbody>
            {!searchByCategory && !searchByYear && (
              <>
                {currentUsers.map((winner, index) => (
                  <UserTable user={winner} key={index} />
                ))}
              </>
            )}
            {searchByCategory && searchByYear && (
              <>
                {categoryAndYearData.map((winner, index) => (
                  <UserTable user={winner} key={index} />
                ))}
              </>
            )}
            {searchByCategory && !searchByYear && (
              <>
                {totalWinners
                  .filter(categoryFilter(searchByCategory))
                  .map((winner, index) => (
                    <UserTable user={winner} key={index} />
                  ))}
              </>
            )}
            {searchByYear && !searchByCategory && (
              <>
                {totalWinners
                  .filter(yearFilter(searchByYear))
                  .map((winner, index) => (
                    <UserTable user={winner} key={index} />
                  ))}
              </>
            )}
          </tbody>
        </Table>

        <br />
      </div>

      <div>
        {searchByCategory || searchByYear ? (
          ''
        ) : (
          <nav className='col-md-4 offset-md-4 text-center pt-2 p-3'>
            <Pagination
              current={currentPage}
              total={Math.ceil(totalWinners.length / userPerpage) * 10}
              onChange={changePage}
              showSizeChanger={false}
            />
          </nav>
        )}
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home
