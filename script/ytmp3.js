export const ytmp3 = async (url, result) => {
  const END_POINT = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(
    url
  )}`;
  try {
    const response = await fetch(END_POINT);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    result.innerHTML = `<div class="result">
        <span class="author">Channel : ${data.author}</span>
        <span class="title">Title : ${data.title}</span>
        <img src="${data.thumbnail}" alt="thumbnail">
        <span class="duration">Duration : ${data.duration}</span>
        <a href="${data.downloadUrl}" class="download"><button>Download file mp3...</button></a>
    </div>`;
  } catch (error) {
    console.error(error);
    result.innerHTML = `Mohon ulangi dan periksa url yang anda inputkan...`;
  }
};
