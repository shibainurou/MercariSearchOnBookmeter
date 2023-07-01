"use strict";

function addLinks() {
  const bookDetails = document.querySelectorAll('.book__detail');
  bookDetails.forEach(bookDetail => {
    const bookTitle = bookDetail.querySelector('.detail__title');
    const titleText = bookTitle.textContent;
    const newDiv = document.createElement('div');
    newDiv.classList.add('detail_mercari');
    newDiv.innerHTML = `<a href="https://jp.mercari.com/search?keyword=${titleText}" target="_blank">メルカリへ</a>`;
    const amazonDetail = bookDetail.querySelector('.detail__amazon');
    bookDetail.appendChild(newDiv);
    bookDetail.insertBefore(amazonDetail, newDiv);
  });
}

addLinks();

const observer = new MutationObserver((mutationsList, observer) => {
  addLinks();
});

const targetNode = document.querySelector('.book-list--grid');
const config = { childList: true, subtree: true };

observer.observe(targetNode, config);
