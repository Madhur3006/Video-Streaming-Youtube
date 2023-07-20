const GOOGLE_API_KEY = 'AIzaSyCPYGRA2eXaA25UYZIdZbYBi0z5M06Sv50'
export const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY
export const SEARCH_SUGGESTIONS_URL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='