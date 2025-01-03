export const instagram = async (url, result) => {
  const END_POINT = `https://api.ryzendesu.vip/api/downloader/igdl?url=${url}`;
  try {
    const response = await fetch(END_POINT);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    result.innerHTML = `<div class="result">
            <img src="${data.data[0].thumbnail}" alt="thumbnail">
            <a href="${data.data[0].url}" class="download"><button>Download file mp4...</button></a>
        </div>`;
  } catch (error) {
    console.error(error);
    result.innerHTML = `Mohon ulangi dan periksa url yang anda inputkan...`;
  }
};
