import React, { useState, useEffect } from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";

const API_review = "https://jsonplaceholder.typicode.com/comments";

const Reviewpage = () => {
  const [reviews, setReviews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const reviewsPerPage = 12;
  const pagesVisited = pageNumber * reviewsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_review);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const displayReviews = reviews
    .slice(pagesVisited, pagesVisited + reviewsPerPage)
    .map((review) => (
      <div key={review.id} className="grid-review-block col-md-3">
        <div className="review-item-body">
          <div className="review-item-account">{review.email}</div>
          <div className="review-with-rating-star">
            <div className="review-list-rating-verify-purchase-wrap">
              <svg
                className="star-review-icon"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3.34 13.86c-.48.3-.76.1-.63-.44l1.08-4.56L.26 5.82c-.42-.36-.32-.7.24-.74l4.63-.37L6.92.39c.2-.52.55-.52.76 0l1.8 4.32 4.62.37c.56.05.67.37.24.74l-3.53 3.04 1.08 4.56c.13.54-.14.74-.63.44L7.3 11.43l-3.96 2.43z"
                ></path>
              </svg>
              <svg
                className="star-review-icon"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3.34 13.86c-.48.3-.76.1-.63-.44l1.08-4.56L.26 5.82c-.42-.36-.32-.7.24-.74l4.63-.37L6.92.39c.2-.52.55-.52.76 0l1.8 4.32 4.62.37c.56.05.67.37.24.74l-3.53 3.04 1.08 4.56c.13.54-.14.74-.63.44L7.3 11.43l-3.96 2.43z"
                ></path>
              </svg>
              <svg
                className="star-review-icon"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3.34 13.86c-.48.3-.76.1-.63-.44l1.08-4.56L.26 5.82c-.42-.36-.32-.7.24-.74l4.63-.37L6.92.39c.2-.52.55-.52.76 0l1.8 4.32 4.62.37c.56.05.67.37.24.74l-3.53 3.04 1.08 4.56c.13.54-.14.74-.63.44L7.3 11.43l-3.96 2.43z"
                ></path>
              </svg>
              <svg
                className="star-review-icon"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3.34 13.86c-.48.3-.76.1-.63-.44l1.08-4.56L.26 5.82c-.42-.36-.32-.7.24-.74l4.63-.37L6.92.39c.2-.52.55-.52.76 0l1.8 4.32 4.62.37c.56.05.67.37.24.74l-3.53 3.04 1.08 4.56c.13.54-.14.74-.63.44L7.3 11.43l-3.96 2.43z"
                ></path>
              </svg>
              <svg
                className="star-review-icon"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3.34 13.86c-.48.3-.76.1-.63-.44l1.08-4.56L.26 5.82c-.42-.36-.32-.7.24-.74l4.63-.37L6.92.39c.2-.52.55-.52.76 0l1.8 4.32 4.62.37c.56.05.67.37.24.74l-3.53 3.04 1.08 4.56c.13.54-.14.74-.63.44L7.3 11.43l-3.96 2.43z"
                ></path>
              </svg>
            </div>
            <div className="rating-number-list">5/5</div>
          </div>
          <div className="review-description pt-2">{review.body}</div>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <ReactPaginate
        className="review-paginate"
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      <div className="container pb-4">
        <div className="review-grid-container">
          <div className="review-grid-header">
            <div className="review-grid-title">Customer Reviews</div>
            <div className="review-grid-summary">
              <div className="review-summary-average-body">
                <div className="review-row">{displayReviews}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviewpage;
