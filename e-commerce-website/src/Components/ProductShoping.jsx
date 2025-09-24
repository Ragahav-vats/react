import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import axios from 'axios';
import Show from './Show';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { toast } from 'react-toastify';

export default function ProductShoping() {
  const [showImages, setShowImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sorting, setSorting] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  

  useEffect(() => {
    // axios.get('https://dummyjson.com/products?limit=12')
    axios.get("https://wscubetech.co/ecommerce-api/products.php",{
      params: {
        page: currentPage,
        limit: 24,
        price_from: priceFrom,
        price_to: priceTo,
        sorting: sorting,
        categories: filterCategories.toString(),
        brands: filterBrands.toString(),
      },
      
      })
      .then((result) => {
        setShowImages(result.data.data);
        setTotalPages(result.data.total_pages);

      })
      .catch(() => {
        toast.error('something went wrong !')
      })
  }, [filterCategories, filterBrands, priceFrom, sorting,currentPage,totalPages]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch(() => {
        toast.error('something went wrong !')
      })
  }, [])

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((result) => {
        setBrands(result.data.data);
      })
      .catch(() => {
        toast.error('something went wrong !')
      })
  }, [])

  const filterCategory = (slug) => {

    if (filterCategories.includes(slug)) {
      const Data = filterCategories.filter((v) => {
        if (v != slug) {
          return v;
        }

      })
      setFilterCategories(Data);
      console.log(Data);
    
    } else {
      const Data = [...filterCategories, slug];
      setFilterCategories(Data);
      console.log(Data);
     
    }
  }
  const filterBrand = (slug) => {

    if (filterBrands.includes(slug)) {
      const Data = filterBrands.filter((v) => {
        if (v != slug) {
          return v;
        }

      })
      setFilterBrands(Data);
      console.log(Data);
    } else {
      const Data = [...filterBrands, slug];
      setFilterBrands(Data);
      console.log(Data);
   
    }
  }

  const priceFilter = (from, to) => {
    setPriceFrom(from);
    setPriceTo(to);
  }
  const filterSorting = (sort) => {
    setSorting(sort)
  }
  return (
    <>
      <div class="overlay d-none"></div>
      <div class="search-section">
        <div class="container-fluid container-xl">
          <div class="row main-content ml-md-0">
            <div class="sidebar col-md-3 px-0">
              <h1 class="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                <span class="mr-2 filter-close-btn">
                  X
                </span>
                Filters
                <span class="ml-auto text-uppercase">Reset Filters</span>
              </h1>
              <div class="sidebar__inner ">
                <div class="filter-body">
                  <div>
                    <h2 class="border-bottom filter-title">All Categories</h2>
                    <div class="mb-30 filter-options">

                      {
                        categories.map((v, i) => {
                          return (
                            <div class="custom-control custom-checkbox mb-3" key={i}>
                              <input type="checkbox" class="custom-control-input" id={v.id} onClick={() => filterCategory(v.slug)} />
                              <label class="custom-control-label" for={v.id}>{v.name}</label>
                            </div>
                          )

                        })
                      }


                    </div>
                    {/* <!--seating option end--> */}
                    <h2 class="font-xbold body-font border-bottom filter-title">All Brands</h2>
                    <div class="mb-3 filter-options" id="cusine-options">
                      {
                        brands.map((v, i) => {
                          return (
                            <div class="custom-control custom-checkbox mb-3" key={i}>
                              <input type="checkbox" class="custom-control-input" id={v.slug} onClick={() => filterBrand(v.slug)} />
                              <label class="custom-control-label" for={v.slug}>{v.name}</label>
                            </div>
                          )

                        })
                      }
                    </div>

                    {/* <!-- cusine filters end --> */}

                    <h2 class="border-bottom filter-title">Price Filter</h2>
                    <div class="mb-3 filter-options" id="services-options">
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" class="custom-control-input" onClick={() => priceFilter(0, 250)} id="Breakfast" />
                        <label class="custom-control-label" for="Breakfast">0-250</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" class="custom-control-input" id="Lunch" onClick={() => priceFilter(251, 500)} />
                        <label class="custom-control-label" for="Lunch">251-500</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" class="custom-control-input" id="Donner" onClick={() => priceFilter(501, 750)} />
                        <label class="custom-control-label" for="Donner">501-750</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" class="custom-control-input" id="Cafe" onClick={() => priceFilter(751, 1000)} />
                        <label class="custom-control-label" for="Cafe">751-1000</label>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="radio" class="custom-control-input" id="Brunch" onClick={() => priceFilter(1000, '')} />
                        <label class="custom-control-label" for="Brunch">1000 and above</label>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content col-md-9">
              <div class="d-flex justify-content-between border-bottom align-items-center">
                <h2 class="title">Products</h2>
                <div class="filters-actions">
                  <div>
                    <button class="btn filter-btn d-md-none"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
                      Filter
                    </button>
                  </div>
                  <div class="d-flex align-items-center">

                    <div class="dropdown position-relative sort-drop">
                      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Sorting By -
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button" onClick={() => filterSorting(1)}>ASC By Name(A-Z)</button></li>
                        <li><button class="dropdown-item" type="button" onClick={() => filterSorting(2)}>DESC By Name(Z-A)</button></li>
                        <li><button class="dropdown-item" type="button" onClick={() => filterSorting(3)}>ASC By Price(Low To High)</button></li>
                        <li><button class="dropdown-item" type="button" onClick={() => filterSorting(4)}>DESC By Price(High To Low)</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


              <div class="row row-grid">
                {
                  showImages.map((items, index) => {
                    return (
                      <Show key={index} items={items} type='2'/>
                    )

                  })

                }

              </div>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
