


fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
        const markup = 
        `<div class="video-preview">
        <div class="thumbnails-row">
          <img class="thumbnail" src="${element.image}" alt="">
          <div class="video-time">${element.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="${element.channelImage}"alt="">
          </div>
          <div class="video-info">
            <p class="video-title">${element.title}</p> 
            <p class="author">${element.channelName}</p>
            <p class="video-views">${element.numberOfViews} &#183; ${element.postedTime}</p>
          </div>
        </div>
      </div>`
        document.querySelector(".video-grid").insertAdjacentHTML('beforeEnd', markup)
    });
  })